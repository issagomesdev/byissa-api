import { Router } from 'express'
import { getAllProjects, getProjectByName} from '../controllers/project.controller'

const router = Router()

router.get('/', getAllProjects)
router.get('/:name', getProjectByName);


export default router
