import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator';

export enum searchType {
  album = 'album',
  artist = 'artist',
  playlist = 'playlist',
  track = 'track',
}

export class SearchRequestParameters {
  @ApiModelProperty()
  @IsString()
  q: string;

  @ApiModelProperty({
    enum: Object.keys(searchType),
  })
  @IsString()
  type: searchType;

  @ApiModelPropertyOptional()
  @IsString()
  @IsOptional()
  market?: string;

  @ApiModelPropertyOptional({
    minimum: 1,
    default: 10,
    maximum: 50,
  })
  @IsNumberString()
  @IsOptional()
  limit?: number;

  @ApiModelPropertyOptional({
    minimum: 0,
    default: 0,
    maximum: 10_000,
  })
  @IsNumberString()
  @IsOptional()
  offset?: number;

  @ApiModelPropertyOptional({
    enum: ['audio'],
  })
  @IsIn(['audio'])
  @IsOptional()
  include_external?: 'audio' | null;
}
