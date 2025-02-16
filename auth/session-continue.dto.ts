import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SessionContinueDto {
  @ApiProperty()
  @IsEmail()
  email: string;
}