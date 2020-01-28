import { IsString } from "class-validator";

export class CallbackDTO {
  @IsString() code!: string;
}
