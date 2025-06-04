import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany
} from 'typeorm'
import { Project } from './Project'

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column({ nullable: true })
  icon?: string

  @Column({ nullable: true })
  description?: string

  @ManyToMany(() => Project, project => project.categories)
  projects!: Project[]
}
