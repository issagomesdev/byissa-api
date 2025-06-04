import { Router } from 'express'
import ProjectRoutes from './projects.routes'
import TechsRoutes from './techs.routes'
import CategoriesRoutes from './categories.routes'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' })
});

router.use('/projects', ProjectRoutes);
router.use('/techs', TechsRoutes)
router.use('/categories', CategoriesRoutes)


export default router
