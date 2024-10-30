import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {

  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Camiseta niño'
  })
  @IsString()
  @IsNotEmpty()
  name: string;




@ApiProperty({
  description: 'Descripcion del producto',
  example: 'Para niño talla Xs'
})  
  @IsString()
  @IsNotEmpty()
  description: string;




  @ApiProperty({
    description: 'Valor del producto',
    example: '45'
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;




  @ApiProperty({
    description: 'Stock del producto',
    example: '20'
  })
  @IsNumber()
  @IsOptional()
  stock?: number;



  
  
  @ApiProperty({
    description: 'imagen del producto',
    example: 'www.miimagen.com.co.url'
  })
  @IsString()
  @IsOptional()
  imgUrl?: string;


  @ApiProperty({
    description: 'Categoria del producto',
    example: '6f5a6255-cde6-4f63-b054-ac60220a3413'
  })
  @IsString()
  @IsNotEmpty()
  categoryId: string;
}
