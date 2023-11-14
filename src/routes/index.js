import Router from 'express'
import socialAuthRoutes from './socialAuthRoutes'
import authRoutes from './authRoutes'
import vehicleRoutes from './vehicleRoutes'

const router = Router()

router.use(socialAuthRoutes)
router.use(authRoutes)
router.use('/vehicles', vehicleRoutes)

export default router
