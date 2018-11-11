import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Buffer } from 'buffer';
import * as util from 'util';

import { ConfigService } from '../../app/config/config.service';
import { AccessTokenResponse, SearchRequestParameters } from './interfaces';

@Injectable()
export class SpotifyService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {
    if (this.config.isDevEnvironment) {
      this.httpService.axiosRef.interceptors.request.use(req => {
        Logger.log(util.inspect(req), 'SpotifyService REQUEST');
        return req;
      });

      this.httpService.axiosRef.interceptors.response.use(res => {
        Logger.log(util.inspect(res), 'SpotifyService RESPONSE');
        return res;
      });
    }
  }

  async query(params: SearchRequestParameters) {
    const token = await this.getAccessToken();

    return this.httpService
      .get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
        params,
      })
      .toPromise()
      .then(res => res.data);
  }

  private async getAccessToken(): Promise<AccessTokenResponse> {
    const base64Key = Buffer.from(
      `${this.config.spotify.id}:${this.config.spotify.secret}`,
    ).toString('base64');

    return this.httpService
      .post<AccessTokenResponse>(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials', // do not send the API JSON!
        {
          headers: {
            // tslint:disable-next-line:object-literal-key-quotes
            Authorization: `Basic ${base64Key}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .toPromise()
      .then(res => res.data);
  }
}
