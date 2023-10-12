import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { SubServicesValidation } from './subServices.validation'
import { SubServicesController } from './subServices.controller'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(SubServicesValidation.createSubServices),
  SubServicesController.createSubServices,
)

export const SubServicesRoutes = {
  router,
}
