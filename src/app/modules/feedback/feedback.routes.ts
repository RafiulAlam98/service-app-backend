import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { FeedbackValidation } from './feedback.validation'
import { FeedbackController } from './feedback.controller'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(FeedbackValidation.addFeedback),
  FeedbackController.addFeedback,
)
router.get('/', FeedbackController.getAllFeedBacks)

export const FeedbackRoutes = {
  router,
}
