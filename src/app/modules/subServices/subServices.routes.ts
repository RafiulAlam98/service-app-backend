import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { SubServicesController } from './subServices.controller'
import express from 'express'

const router = express.Router()

router.post(
  '/',
  // RequestValidation.ValidateRequest(SubServicesValidation.createSubServices),
  auth(ENUM_USER_ROLE.ADMIN),
  SubServicesController.createSubServices,
)
router.get('/', SubServicesController.getAllSubServices)
router.get('/:id', SubServicesController.getSingleSubServices)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  SubServicesController.updateSubServices,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  SubServicesController.deleteSubServices,
)

export const SubServicesRoutes = {
  router,
}
