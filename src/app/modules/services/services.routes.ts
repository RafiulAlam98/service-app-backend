import { AllServiceController } from './services.controller'
import { RequestValidation } from '../../middlewares/validateRequest'
import { ServiceValidation } from './services.validation'
import express from 'express'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(ServiceValidation.createService),
  AllServiceController.createService,
)
router.get('/', AllServiceController.getAllServices)
router.get('/:id', AllServiceController.getSingleServices)
router.patch('/:id', AllServiceController.updateServices)
router.delete('/:id', AllServiceController.deleteServices)

export const AllServiceRoutes = {
  router,
}
