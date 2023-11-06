import Router from 'express'
import socialAuthRoutes from './socialAuthRoutes'

const router = Router()

router.use(socialAuthRoutes)

export default router
