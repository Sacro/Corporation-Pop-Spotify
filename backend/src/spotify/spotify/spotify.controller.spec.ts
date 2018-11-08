import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyController } from './spotify.controller';
import { SpotifyService } from './spotify.service';

class MockSpotifyService {}

describe('Spotify Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SpotifyController],
      providers: [{ provide: SpotifyService, useClass: MockSpotifyService }],
    }).compile();
  });

  it('should be defined', () => {
    const controller: SpotifyController = module.get<SpotifyController>(
      SpotifyController,
    );
    expect(controller).toBeDefined();
  });
});
