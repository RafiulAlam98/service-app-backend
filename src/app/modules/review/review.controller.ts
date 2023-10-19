import { Request, Response } from 'express'

import { ReviewService } from './review.service'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'

const addReview = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.addReview(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review Added Successfully',
    data: result,
  })
})
const getAllReview = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.getAllReview()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review Retrieved Successfully',
    data: result,
  })
})
const getSingleReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ReviewService.getSingleReview(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review Retrieved Successfully',
    data: result,
  })
})

export const ReviewController = {
  addReview,
  getAllReview,
  getSingleReview,
}
