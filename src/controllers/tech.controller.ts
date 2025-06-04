import { Request, Response } from 'express'
import { getAllTechs } from '../services/tech.service'

export const getTechs = async (_: Request, res: Response) => {
  try {
    const techs = await getAllTechs()
    res.status(200).json(techs)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
