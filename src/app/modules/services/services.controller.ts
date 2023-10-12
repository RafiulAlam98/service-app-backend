import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'

import { sendResponse } from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { AllServices } from './services.service'

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await AllServices.createService(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services Created Successfully',
    data: result,
  })
})

export const AllServiceController = {
  createService,
}
