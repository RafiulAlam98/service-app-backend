import { Request, Response } from 'express'

import { Allfaq } from './faq.service'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'

const createFaq = catchAsync(async (req: Request, res: Response) => {
  const result = await Allfaq.createFaq(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faq Created Successfully',
    data: result,
  })
})
const getAllfaq = catchAsync(async (req: Request, res: Response) => {
  const result = await Allfaq.getAllFaq()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faq retrieved Successfully',
    data: result,
  })
})

const getSingleFaq = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await Allfaq.getSingleFaq(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faq retrieved Successfully',
    data: result,
  })
})

const updateFaq = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await Allfaq.updateFaq(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faq updated successfully',
    data: result,
  })
})

const deleteFaq = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await Allfaq.deleteFaq(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faq deleted successfully',
    data: result,
  })
})

export const AllFaqController = {
  createFaq,
  getAllfaq,
  getSingleFaq,
  updateFaq,
  deleteFaq,
}
