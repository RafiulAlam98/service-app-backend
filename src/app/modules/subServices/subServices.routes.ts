import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { SubServicesValidation } from './subServices.validation'
import { SubServicesController } from './subServices.controller'

const router = express.Router()

router.post(
  '/',
  // RequestValidation.ValidateRequest(SubServicesValidation.createSubServices),
  SubServicesController.createSubServices,
)
router.get('/', SubServicesController.getAllSubServices)
router.get('/:id', SubServicesController.getSingleSubServices)

export const SubServicesRoutes = {
  router,
}
