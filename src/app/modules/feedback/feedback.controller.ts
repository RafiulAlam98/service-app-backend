import { Request, Response } from 'express'

import { FeedbackService } from './feedback.service'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'

const addFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackService.addFeedback(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback Added Successfully',
    data: result,
  })
})
const getAllFeedback = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackService.getAllFeedback()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback Retrieved Successfully',
    data: result,
  })
})
const getSingleFeedback = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await FeedbackService.getSingleFeedback(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback Retrieved Successfully',
    data: result,
  })
})

export const FeedbackController = {
  addFeedback,
  getAllFeedback,
  getSingleFeedback,
}
