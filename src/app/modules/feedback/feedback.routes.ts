import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { FeedbackValidation } from './feedback.validation'
import { FeedbackController } from './feedback.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(FeedbackValidation.addFeedback),
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FeedbackController.addFeedback,
)
router.get('/', FeedbackController.getAllFeedBacks)

export const FeedbackRoutes = {
  router,
}
