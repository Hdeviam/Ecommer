import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '../categories/category.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('products')
export class Product {


  @ApiProperty({
    description: 'Automatico',
    example: 'Lo da el sistema'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Camiseta'
  })
  @Column({ length: 50 })
  name: string;


  @ApiProperty({
    description: 'Descripcion del producto',
    example: 'Para niño'
  })
  @Column('text')
  description: string;


  @ApiProperty({
    description: 'Valor unitario del producto',
    example: '10'
  })
  @Column('decimal')
  price: number;




  @ApiProperty({
    description: 'Stock en almacen',
    example: '30'
  })
  @Column('int', { nullable: true })
  stock: number;





  @ApiProperty({
    description: 'Imagen del producto',
    example: 'www.miimagen.com.url'
  })
  @Column('text', { nullable: true })
  imgUrl: string;


  @ApiProperty({
    description: 'la categoria del producto',
    example: '6f5a6255-cde6-4f63-b054-ac60220a3413'
  })
  @ManyToOne(() => Category, category => category.products, { eager: true })
  category: Category;

  
}
