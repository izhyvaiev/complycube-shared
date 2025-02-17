import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { VerificationType } from '@app/complycube-shared/database/verification-type';
import { VerificationOutcome } from '@app/complycube-shared/database/verification-outcome';

export class VerificationStatusDto {
  @ApiResponseProperty()
  @Expose()
  id: number;

  @ApiResponseProperty({ enum: Object.values(VerificationType) })
  @Expose()
  type: VerificationType

  @ApiResponseProperty()
  @Expose()
  isProcessed: boolean

  @ApiResponseProperty({ enum: Object.values(VerificationOutcome) })
  @Expose()
  outcome: VerificationOutcome | null

  @ApiResponseProperty()
  @Expose()
  sessionId: string
}