import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';


export class CreateCategoryDto {

  @ApiProperty({
    description: 'Una Nombre corta',
    example: 'Camisa para niño'
  })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  name: string;


  @ApiProperty({
    description: 'Una descripción corta',
    example: 'Hermosa camisa para niño',
  })
  @IsString()
  @IsOptional()
  description?: string;
}



