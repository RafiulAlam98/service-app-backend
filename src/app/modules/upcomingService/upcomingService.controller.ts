import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { AllUpcomingService } from './upcomingService.service'

const createUpcomingService = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AllUpcomingService.createUpcomingService(req.body)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Upcoming Services Created Successfully',
      data: result,
    })
  },
)
const getAllUpcomingServices = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AllUpcomingService.getAllUpcomingService()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Upcoming Services retrieved Successfully',
      data: result,
    })
  },
)

const getSingleUpcomingServices = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AllUpcomingService.getSingleUpcomingService(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Upcoming Service retrieved Successfully',
      data: result,
    })
  },
)

const updateUpcomingServices = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body
    const result = await AllUpcomingService.updateUpcomingService(
      id,
      updatedData,
    )
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Upcoming Service updated successfully',
      data: result,
    })
  },
)

const deleteUpcomingServices = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await AllUpcomingService.deleteUpcomingService(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: ' Upcoming Service deleted successfully',
      data: result,
    })
  },
)

export const AllUpcomingServiceController = {
  createUpcomingService,
  getAllUpcomingServices,
  getSingleUpcomingServices,
  updateUpcomingServices,
  deleteUpcomingServices,
}
