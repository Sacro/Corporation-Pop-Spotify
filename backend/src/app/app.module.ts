import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { SpotifyModule } from '../spotify/spotify.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, SpotifyModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
