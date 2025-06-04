import { AppDataSource } from '../data-source'
import { Category } from '../entity/Category'

export const getAllCategories = async () => {
  const repo = AppDataSource.getRepository(Category)
  const [data] = await repo.find({ order: { name: 'ASC' } })
  return { data }
}
