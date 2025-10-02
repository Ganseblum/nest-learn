import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  gender: number;
  @Column()
  photo: string;
  @Column()
  photo3: string;
  @Column()
  address: string;
  @OneToOne(() => User)
  // @JoinColumn({ name: 'uid' }) // 设置管理默认名称 否则是表名+主键 小驼峰命名方式
  @JoinColumn()
  user: User;
}
