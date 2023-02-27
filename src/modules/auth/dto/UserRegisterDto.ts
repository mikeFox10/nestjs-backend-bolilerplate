import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

import { Trim } from '../../../decorators/transforms.decorator';

export class UserRegisterDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  @ApiProperty()
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly lastName: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Trim()
  readonly email: string;

  @ApiProperty({ minLength: 6 })
  @IsString()
  @MinLength(6)
  readonly password: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  phone: string;
}
