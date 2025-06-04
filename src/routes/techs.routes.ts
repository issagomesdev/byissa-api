import { Router } from 'express'
import { getTechs } from '../controllers/tech.controller'

const router = Router()
router.get('/', getTechs)
export default router
