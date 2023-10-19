import { ENUM_USER_ROLE } from './../../../enums/user'

import auth from '../../middlewares/auth'

import express from 'express'
import { OrdersController } from './order.controller'

const router = express.Router()

router.post('/', auth(ENUM_USER_ROLE.USER), OrdersController.createOrder)
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OrdersController.getAllOrder,
)
router.get(
  '/:email',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN),
  OrdersController.getSingleOrder,
)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN),
  OrdersController.updateSingleOrder,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OrdersController.deleteSingleOrder,
)

export const OrderRoutes = {
  router,
}
