import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  isEnded: boolean;

  @Column({ default: new Date() })
  createdAt: Date;
}