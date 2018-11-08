import { Module, HttpModule } from '@nestjs/common';

import { SpotifyController } from './spotify/spotify.controller';
import { SpotifyService } from './spotify/spotify.service';

@Module({
  controllers: [SpotifyController],
  imports: [HttpModule],
  providers: [SpotifyService],
})
export class SpotifyModule {}
