import { Expose } from 'class-transformer';
import { ApiResponseProperty } from '@nestjs/swagger';

export class SessionResponseDto {
	@ApiResponseProperty()
	@Expose()
	access_token: string

	@ApiResponseProperty()
	@Expose()
	token_type: 'bearer'

	@ApiResponseProperty()
	@Expose()
	expires_in: number

	@ApiResponseProperty()
	@Expose()
	refresh_token: string

	@ApiResponseProperty()
	@Expose()
	refresh_token_expires_at: string
}
