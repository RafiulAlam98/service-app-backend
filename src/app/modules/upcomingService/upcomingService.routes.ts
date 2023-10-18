import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { AllUpcomingServiceController } from './upcomingService.controller'

const router = express.Router()

router.post(
  '/',

  AllUpcomingServiceController.createUpcomingService,
)
router.get('/', AllUpcomingServiceController.getAllUpcomingServices)
router.get('/:id', AllUpcomingServiceController.getSingleUpcomingServices)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AllUpcomingServiceController.updateUpcomingServices,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AllUpcomingServiceController.deleteUpcomingServices,
)

export const AllUpcomingServiceRoutes = {
  router,
}
