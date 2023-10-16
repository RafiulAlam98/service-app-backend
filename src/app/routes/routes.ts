import { AdminRoutes } from '../modules/admin/admin.route'
import { AllBlogRoutes } from '../modules/blog/blog.routes'
import { AllFaqRoutes } from '../modules/faq/faq.routes'
import { AllServiceRoutes } from '../modules/services/services.routes'
import { AuthRoutes } from '../modules/auth/auth.route'
import { FeedbackRoutes } from '../modules/feedback/feedback.routes'
import { SubServicesRoutes } from '../modules/subServices/subServices.routes'
import { UserRoutes } from '../modules/users/user.route'
import express from 'express'

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
  {
    path: '/admins',
    route: AdminRoutes.router,
  },
  {
    path: '/auth',
    route: AuthRoutes.router,
  },
  {
    path: '/faq',
    route: AllFaqRoutes.router,
  },
  {
    path: '/blog',
    route: AllBlogRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
