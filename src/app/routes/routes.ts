import express from 'express'
import { SubServicesRoutes } from '../modules/subServices/subServices.routes'
import { AllServiceRoutes } from '../modules/services/services.routes'
import { FeedbackRoutes } from '../modules/feedback/feedback.routes'
import { UserRoutes } from '../modules/users/user.route'

const router = express.Router()
const moduleRoutes = [
  {
    path: '/services',
    route: AllServiceRoutes.router,
  },
  {
    path: '/sub-services',
    route: SubServicesRoutes.router,
  },
  {
    path: '/feedback',
    route: FeedbackRoutes.router,
  },
  {
    path: '/users',
    route: UserRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
