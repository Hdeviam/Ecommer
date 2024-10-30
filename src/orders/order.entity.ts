import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { OrderDetail } from './order-detail.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('orders')
export class Order {

  @ApiProperty({
    description: 'Automatico',
    example: 'Lo da el sistema'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string; 



  @ApiProperty({
    description: 'El usuario creador',
    example: 'new45@gmail.com'
  })
  @ManyToOne(() => User, user => user.orders)
  user: User;

  
  
  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @OneToMany(() => OrderDetail, orderDetail => orderDetail.order, {
    cascade: true, 
  })
  orderDetails: OrderDetail[];
}
