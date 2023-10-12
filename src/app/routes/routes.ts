import express from 'express'
import { SubServicesRoutes } from '../modules/subServices/subServices.routes'
import { AllServiceRoutes } from '../modules/services/services.routes'

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
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
