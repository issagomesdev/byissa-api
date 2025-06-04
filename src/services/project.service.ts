import { AppDataSource } from '../data-source'
import { Project } from '../entity/Project'
import { ILike } from 'typeorm'

interface GetProjectsParams {
  page?: string
  query?: string
  techs?: number[]
  categories?: number[]
}

export const getProjects = async ({
  page,
  query,
  techs,
  categories
}: GetProjectsParams) => {

  const repo = AppDataSource.getRepository(Project)

  const qb = repo.createQueryBuilder('project')
    .leftJoinAndSelect('project.categories', 'category')
    .leftJoinAndSelect('project.techs', 'tech')
    
  if (query) {
    qb.andWhere(
      `(project.name ILIKE :query OR project.description ILIKE :query OR project.content ILIKE :query)`,
      { query: `%${query}%` }
    )
  }

  if (categories?.length) {
    qb.andWhere('category.id IN (:...categories)', { categories })
  }

  if (techs?.length) {
    qb.andWhere('tech.id IN (:...techs)', { techs })
  }

  qb.orderBy('project.orderNumber', 'ASC')

  if(page){  
      const take = 4
      const skip = (parseInt(page) - 1) * take
      qb.take(take).skip(skip)

      const [data, total] = await qb.getManyAndCount()

      return {
        page,
        perPage: take,
        total,
        data
      }
    }

  const [data] = await qb.getManyAndCount()

  return {
    data
  }
}
