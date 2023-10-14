import { SubServicesController } from './subServices.controller'
import express from 'express'

const router = express.Router()

router.post(
  '/',
  // RequestValidation.ValidateRequest(SubServicesValidation.createSubServices),
  SubServicesController.createSubServices,
)
router.get('/', SubServicesController.getAllSubServices)
router.get('/:id', SubServicesController.getSingleSubServices)
router.patch('/:id', SubServicesController.updateSubServices)
router.delete('/:id', SubServicesController.deleteSubServices)

export const SubServicesRoutes = {
  router,
}
