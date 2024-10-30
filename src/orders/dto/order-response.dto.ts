import { IsUUID, IsNumber, IsArray, IsString } from 'class-validator';
import { OrderDetailResponseDto } from './order-detail-response.dto'; // Asegúrate de tener este DTO
import { ApiProperty } from '@nestjs/swagger';

export class OrderResponseDto {

  @ApiProperty({
    description: 'Una Nombre corta',
    example: 'Camisa para niño'
  })
  @IsUUID()
  id: string;



  @ApiProperty({
    description: 'Valor total de la compra',
    example: '1800'
  })
  @IsNumber()
  total: number;


  @ApiProperty({
    description: 'correo del usuario',
    example: 'b367b0a9-e304-4781-af92-8cb027542bc'
  })
  @IsUUID()
  userId: string;



  @ApiProperty({
    description: 'Detalles de la orden',
    example: 'Su orden detallada'
  })
  @IsArray()
  orderDetails: OrderDetailResponseDto[]; // Agrega este campo para los detalles de la orden
}


