import { ENUM_USER_ROLE } from '../../../enums/user'
import { RequestValidation } from '../../middlewares/validateRequest'
import { ReviewController } from './review.controller'
import { ReviewValidation } from './review.validation'
import auth from '../../middlewares/auth'
import express from 'express'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(ReviewValidation.addReview),
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ReviewController.addReview,
)
router.get('/', ReviewController.getAllReview)
router.get('/:id', ReviewController.getSingleReview)

export const ReviewRoutes = {
  router,
}
