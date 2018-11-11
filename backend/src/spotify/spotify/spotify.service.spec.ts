import { HttpModule, HttpService } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { ConfigService } from '../../app/config/config.service';
import { SpotifyService } from './spotify.service';

describe('SpotifyService', () => {
  let service: SpotifyService;
  let httpService: HttpService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [ConfigService, SpotifyService],
    }).compile();
    service = module.get<SpotifyService>(SpotifyService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('query', () => {
    it('should be defined', () => {
      expect(service.query).toBeDefined();
    });
  });

  describe('getAccessToken', () => {
    it('should be defined', () => {
      expect((service as any).getAccessToken).toBeDefined();
    });

    it('should call the httpservice', async () => {
      const result = {
        access_token: 'access_token',
        token_type: 'Bearer',
        expires_in: 3600,
        scope: '',
      };

      jest.spyOn(httpService, 'post').mockImplementation(() => ({
        toPromise: jest.fn(() => ({ then: jest.fn(() => result) })),
      }));

      expect(await (service as any).getAccessToken()).toBe(result);
    });
  });
});
