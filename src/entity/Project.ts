import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm'
import { Category } from './Category'
import { Tech } from './Tech'

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  description!: string

  @Column('longtext', { nullable: true })
  content?: string

  @Column({ nullable: true })
  imageUrl?: string

  @Column({ nullable: true })
  repositoryLink?: string

  @Column({ nullable: true })
  demoLink?: string

  @Column({ type: 'int', default: 0 })
  orderNumber?: number

  @ManyToMany(() => Category, category => category.projects, { cascade: true })
  @JoinTable({ name: 'project_categories' })
  categories!: Category[]

  @ManyToMany(() => Tech, tech => tech.projects, { cascade: true })
  @JoinTable({ name: 'project_techs' })
  techs!: Tech[]
}
