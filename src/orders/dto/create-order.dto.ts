import { IsNotEmpty, IsArray, ValidateNested, IsUUID, IsPositive, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class ProductDto {

  @ApiProperty({
    description: 'Una Nombre corta',
    example: 'Camisa para niño'
  })
  @IsUUID() // Valida que sea un UUID
  @IsNotEmpty({ message: 'El ID del producto es obligatorio.' })
  id: string;


  @ApiProperty({
    description: 'Una Nombre corta',
    example: 'Camisa para niño'
  })
  @IsPositive({ message: 'La cantidad debe ser un número positivo.' }) // Asegura que la cantidad sea positiva
  @IsNotEmpty({ message: 'La cantidad es obligatoria.' }) // Asegura que no esté vacío
  quantity: number;
}

export class CreateOrderDto {

  @ApiProperty({
    description: 'correo del usuario',
    example: 'b367b0a9-e304-4781-af92-8cb027542bc'
  })
  @IsUUID()
  @IsNotEmpty({ message: 'El ID del usuario es obligatorio.' })
  userId: string;


  @ApiProperty({
    description: 'Lista de productos incluidos en la orden',
    type: [ProductDto],
    example: [
      {
        id: "8bba9ad6-357c-4be2-abac-28560bb850ec",
        quantity: 2
      },
      {
        id: "3f4a7fc0-13ce-462f-a459-e27301052141",
        quantity: 1
      }
    ],
  })
  @IsArray()
  @ArrayMinSize(1, { message: 'Se debe proporcionar al menos un producto.' })
  @ValidateNested({ each: true })
  @Type(() => ProductDto) // Transformación de cada elemento del array a ProductDto
  products: ProductDto[]; // Cambia aquí para que use el ProductDto definido
}