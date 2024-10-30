import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, MaxLength, Matches, IsOptional } from 'class-validator';

export class UpdateUserDto {


  @ApiProperty({
    description: 'Este es el Email del Usuario',
    example: 'Pikachu@gmail.com'
  })  
  @IsOptional()
  @IsEmail({}, { message: 'El correo electrónico debe ser válido.' })
  email?: string;


  //-------------------------------------------------------------------------------------------------


  @ApiProperty({
    description: 'Este es el nombre',
    example: 'Pikachu '
  })
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
  @MaxLength(80, { message: 'El nombre no puede exceder los 80 caracteres.' })
  name?: string;


  //------------------------------------------------------------------------------------------------------


  @ApiProperty({
    description: 'la direccion de residencia',
    example: 'calle feliz # 45'
  })
  @IsOptional()
  @IsString({ message: 'La dirección debe ser una cadena de texto.' })
  @MinLength(3, { message: 'La dirección debe tener al menos 3 caracteres.' })
  @MaxLength(80, { message: 'La dirección no puede exceder los 80 caracteres.' })
  address?: string;

//---------------------------------------------------------------------------------------------------------

  @ApiProperty({
    description: 'este es el telefono',
    example: '+573104029876'
  })
  @IsOptional()
  @IsString({ message: 'El número de teléfono debe ser una cadena de texto.' })
  @Matches(/^\+?[0-9\s-]+$/, { message: 'El número de teléfono no es válido.' })
  phone?: string;

//---------------------------------------------------------------------------------------------------------

  @ApiProperty({
    description: 'Pais de residencia',
    example: 'EEUU'
  })
  @IsOptional()
  @IsString({ message: 'El país debe ser una cadena de texto.' })
  country?: string;

//---------------------------------------------------------------------------------------------------------

  @ApiProperty({
    description: 'Ciudad',
    example: 'California'
  })
  @IsOptional()
  @IsString({ message: 'La ciudad debe ser una cadena de texto.' })
  city?: string;

//-------------------------------------------------------------------------------------------------------

  @ApiProperty({
    description: 'El usuario es administrador',
    example: 'false'
  })
  @IsOptional()
  isAdmin?:boolean;
  


}
