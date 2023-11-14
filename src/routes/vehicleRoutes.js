import Router from 'express'
import asyncErrorHandler from '../utils/asyncErrorHandler'
import paginate from '../middlewares/paginateMiddleware'
import VehicleController from '../controllers/vehicleController'
import isCustomer from '../middlewares/isCustomer'
import tokenValidation from '../middlewares/tokenValidation'

const router = Router()

router.post('/create', tokenValidation, isCustomer, asyncErrorHandler(VehicleController.addVehicle))
router.get('/:id', tokenValidation, isCustomer, asyncErrorHandler(VehicleController.viewVehicle))

export default router
