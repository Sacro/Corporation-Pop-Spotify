import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { AccessTokenResponse, SpotifyService } from './spotify.service';

@ApiUseTags('Spotify')
@Controller('spotify')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}
}
