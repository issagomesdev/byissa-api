import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Project } from './entity/Project'
import { Category } from './entity/Category'
import { Tech } from './entity/Tech'
import * as dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [Project, Category, Tech],
  migrations: ['src/migration/**/*.ts'],
  subscribers: []
});