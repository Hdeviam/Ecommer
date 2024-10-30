import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class OrderDetailResponseDto {


  @ApiProperty({
    description: 'Una Nombre corta',
    example: 'Camisa para niño'
  })
  @IsUUID()
  @IsNotEmpty({ message: 'El ID del producto es obligatorio.' })
  productId: string;

  @ApiProperty({
    description: 'Cantidad por unidad',
    example: '10'
  })
  @IsNumber({}, { message: 'La cantidad debe ser un número.' })
  @IsNotEmpty({ message: 'La cantidad es obligatoria.' })
  quantity: number;


  @ApiProperty({
    description: 'Precio',
    example: '230'
  })
  @IsNumber({}, { message: 'El precio debe ser un número.' })
  @IsNotEmpty({ message: 'El precio es obligatorio.' })
  price: number;


  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Camisa Niño'
  })
  @IsString({ message: 'El nombre del producto es obligatorio.' })
  productName: string;


  @ApiProperty({
    description: 'Valor segun unidades y precio',
    example: 'Und X Valor unitario'
  })
  @IsNumber({}, { message: 'El subtotal debe ser un número.' })
  @IsNotEmpty({ message: 'El subtotal es obligatorio.' })
  subtotal: number;

  @ApiProperty({
    description: 'Imagen del producto',
    example: 'Imagen referencia producto'
  })
  @IsString({ message: 'La URL de la imagen es obligatoria.' })
  imgUrl: string;


  @ApiProperty({
    description: 'Descricion del producto',
    example: 'Camisa para niño talla L'
  })
  @IsString({ message: 'La descripción es obligatoria.' })
  description: string;
}
