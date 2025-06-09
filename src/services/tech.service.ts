import { AppDataSource } from '../data-source'
import { Tech } from '../entity/Tech'

export const getAllTechs = async () => {
 const repo = AppDataSource.getRepository(Tech)
  const data = await repo.find({ order: { id: 'ASC' } })
  return { data }
}
