import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from "./user.entity";
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  gender: number;
  @Column()
  photo: string;
  @Column()
  address: string;
  @OneToOne(() => User)
  // @JoinColumn({ name: 'uid' })
  @JoinColumn()
  user: User;
}
