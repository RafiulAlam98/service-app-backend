import { AllServiceController } from './services.controller'
import { RequestValidation } from '../../middlewares/validateRequest'
import { ServiceValidation } from './services.validation'
import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(ServiceValidation.createService),
  auth(ENUM_USER_ROLE.ADMIN),
  AllServiceController.createService,
)
router.get('/', AllServiceController.getAllServices)
router.get('/:id', AllServiceController.getSingleServices)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AllServiceController.updateServices,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AllServiceController.deleteServices,
)

export const AllServiceRoutes = {
  router,
}
