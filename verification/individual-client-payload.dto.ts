import { PersonGender } from '@app/complycube-shared/database/person-gender';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNumberString,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { CountryCode } from '@app/complycube-shared/generic/country-code';
import { ApiProperty } from '@nestjs/swagger';

export class IndividualClientPayloadDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  mobile: string | null;

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  telephone: string | null;

  @ApiProperty({ enum: Object.values(PersonGender)})
  @IsEnum(PersonGender)
  gender: PersonGender

  @ApiProperty()
  @IsString()
  @MinLength(1)
  firstName: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(1)
  middleName: string | null;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  lastName: string

  @ApiProperty({ example: '2000-01-01' })
  @IsDateString()
  dateOfBirth: string

  @ApiProperty({ enum: Object.values(CountryCode)})
  @IsEnum(CountryCode)
  nationality: string

  @ApiProperty({ enum: Object.values(CountryCode)})
  @IsEnum(CountryCode)
  birthCountry: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  socialSecurityNumber: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  socialInsuranceNumber: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  nationalIdentityNumber: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  taxIdentificationNumber: string | null;
}