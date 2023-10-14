import { Request, Response } from 'express'

import { AllServices } from './services.service'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'

const createService = catchAsync(async (req: Request, res: Response) => {
  const result = await AllServices.createService(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services Created Successfully',
    data: result,
  })
})
const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await AllServices.getAllServices()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services retrieved Successfully',
    data: result,
  })
})

const getSingleServices = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllServices.getSingleServices(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service retrieved Successfully',
    data: result,
  })
})

const updateServices = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AllServices.updateServices(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service updated successfully',
    data: result,
  })
})

const deleteServices = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllServices.deleteServices(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service deleted successfully',
    data: result,
  })
})

export const AllServiceController = {
  createService,
  getAllServices,
  getSingleServices,
  updateServices,
  deleteServices,
}
