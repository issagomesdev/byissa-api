import { Request, Response } from 'express'
import { getProjects, getProject } from '../services/project.service'

export const getAllProjects = async (req: Request, res: Response<any>) => {
  try {
    const page = req.query.page?.toString()
    const query = req.query.query?.toString()
    const techs = req.query.techs?.toString().split(',').map(Number)
    const categories = req.query.categories?.toString().split(',').map(Number)
    const projects = await getProjects({ page, query, techs, categories })
    res.status(200).json(projects)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export const getProjectByName = async (req: Request, res: Response) => {
  try {

    const project = await getProject(req.params.name);

    if (!project) {
      res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json(project);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
};