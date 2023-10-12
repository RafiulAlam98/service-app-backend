import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import { FeedbackServices } from './feedback.service'
import { sendResponse } from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const addFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackServices.addFeedback(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback Added Successfully',
    data: result,
  })
})
const getAllFeedBacks = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackServices.getAllFeedBacks()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback Retrieved Successfully',
    data: result,
  })
})

export const FeedbackController = {
  addFeedback,
  getAllFeedBacks,
}
