import { Expose } from 'class-transformer';
import { ApiResponseProperty } from '@nestjs/swagger';

export class SessionTokenDto {
	@ApiResponseProperty()
	@Expose()
	token: string

	@ApiResponseProperty()
	@Expose()
	sessionId: string
}
