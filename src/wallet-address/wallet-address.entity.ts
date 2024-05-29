import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class WalletAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  address: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, user => user.id)
  user: User;
}
