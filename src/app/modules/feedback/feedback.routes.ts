import { FeedbackController } from './feedback.controller'
import { FeedbackValidation } from './feedback.validation'
import { RequestValidation } from '../../middlewares/validateRequest'
import express from 'express'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(FeedbackValidation.addFeedback),
  FeedbackController.addFeedback,
)
router.get('/', FeedbackController.getAllFeedback)
router.get('/:id', FeedbackController.getSingleFeedback)

export const FeedbackRoutes = {
  router,
}
