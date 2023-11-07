import Router from 'express'
import socialAuthRoutes from './socialAuthRoutes'
import authRoutes from './authRoutes'

const router = Router()

router.use(socialAuthRoutes)
router.use(authRoutes)

export default router
