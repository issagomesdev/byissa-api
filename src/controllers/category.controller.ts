import { Request, Response } from 'express'
import { getAllCategories } from '../services/category.service'

export const getCategories = async (_: Request, res: Response) => {
  try {
    const categories = await getAllCategories()
    res.status(200).json(categories)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
