import { Controller, Get, Param, Query, Logger } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { SearchRequestParameters } from './interfaces';
import { SpotifyService } from './spotify.service';

@ApiUseTags('Spotify')
@Controller('spotify')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @ApiOperation({ title: 'Search Spotify' })
  @Get('search')
  async search(@Query() params: SearchRequestParameters) {
    return this.spotifyService.query(params);
  }
}
