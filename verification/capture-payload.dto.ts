import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CapturePayloadDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  documentId: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  documentType: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  livePhotoId: string;
}