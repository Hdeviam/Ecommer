import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../products/product.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('categories')



export class Category {


  @ApiProperty({
    description: 'lo da el sistema autoaticamente',
    example: 'Lo asigna el sistema automaticamente'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
* @description Este es el nombre de la categoria
* @example Camisetas
*/
  @Column({ length: 50, unique: true })
  name: string;

  /**
* @description Esta es la descripcion de la categoria
* @example Entrenador
*/
  @Column('text', { nullable: true })
  description?: string;

  /**
* @description Este es el listado de Productos
* @example Prductos con relacion a esta categoria
*/
  @OneToMany(() => Product, product => product.category)
  products: Product[];
}
