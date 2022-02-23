import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  emailAddress: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    console.log('aqui')
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
