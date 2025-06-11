import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable
} from 'typeorm'
import { Category } from './Category'
import { Tech } from './Tech'

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

   @Column('mediumtext')
  description!: string

@Column({
  type: 'longtext',
  nullable: true,
  charset: 'utf8mb4',
  collation: 'utf8mb4_unicode_ci',
})
content?: string;

  @Column({ nullable: true })
  imageUrl?: string

  @Column({ nullable: true })
  repositoryLink?: string

  @Column({ nullable: true })
  demoLink?: string

  @Column({ type: 'int', default: 0 })
  orderNumber?: number

  @ManyToMany(() => Category, category => category.projects, { cascade: true })
  @JoinTable({ name: 'projects_categories' })
  categories!: Category[]

  @ManyToMany(() => Tech, tech => tech.projects, { cascade: true })
  @JoinTable({ name: 'projects_techs' })
  techs!: Tech[]
}
