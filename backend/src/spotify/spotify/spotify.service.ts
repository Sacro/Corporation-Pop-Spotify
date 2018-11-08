import { HttpService, Injectable } from '@nestjs/common';
import { Buffer } from 'buffer';

import { ConfigService } from '../../app/config/config.service';

@Injectable()
export class SpotifyService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

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

export interface AccessTokenResponse {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
  scope: string;
}
