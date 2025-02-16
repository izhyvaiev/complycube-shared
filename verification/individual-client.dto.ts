import { PersonGender } from '@app/complycube-shared/database/person-gender';
import { CountryCode } from '@app/complycube-shared/generic/country-code';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class IndividualClientDto {
  @ApiResponseProperty()
  @Expose()
  email: string;

  @ApiResponseProperty()
  @Expose()
  mobile: string | null;

  @ApiResponseProperty()
  @Expose()
  telephone: string | null;

  @ApiResponseProperty({ enum: Object.values(PersonGender)})
  @Expose()
  gender: PersonGender

  @ApiResponseProperty()
  @Expose()
  firstName: string

  @ApiResponseProperty()
  @Expose()
  lastName: string

  @ApiResponseProperty()
  @Expose()
  middleName: string | null

  @ApiResponseProperty({ example: '2000-01-01' })
  @Expose()
  dateOfBirth: string

  @ApiResponseProperty({ enum: Object.values(CountryCode)})
  @Expose()
  nationality: string

  @ApiResponseProperty({ enum: Object.values(CountryCode)})
  @Expose()
  birthCountry: string

  @ApiResponseProperty()
  @Expose()
  socialSecurityNumber: string | null;

  @ApiResponseProperty()
  @Expose()
  socialInsuranceNumber: string | null;

  @ApiResponseProperty()
  @Expose()
  nationalIdentityNumber: string | null;

  @ApiResponseProperty()
  @Expose()
  taxIdentificationNumber: string | null;
}