import { ENUM_USER_ROLE } from '../../../enums/user'
import { FeedbackController } from './feedback.controller'
import { FeedbackValidation } from './feedback.validation'
import { RequestValidation } from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import express from 'express'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(FeedbackValidation.addFeedback),
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FeedbackController.addFeedback,
)
router.get('/', FeedbackController.getAllFeedback)
router.get('/:id', FeedbackController.getSingleFeedback)

export const FeedbackRoutes = {
  router,
}
