import { Request, Response } from "express";

import { SubServicesService } from "./subServices.service";
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'

const createSubServices = catchAsync(async (req: Request, res: Response) => {
  const result = await SubServicesService.createSubServices(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub Services Created Successfully',
    data: result,
  })
})
const getAllSubServices = catchAsync(async (req: Request, res: Response) => {
  const result = await SubServicesService.getAllSubServices()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub Services retrieved Successfully',
    data: result,
  })
})
const getSubServicesByServiceId = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await SubServicesService.getSubServicesByServiceId(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Sub Service retrieved Successfully',
      data: result,
    })
  },
)
const getSubServicesById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await SubServicesService.getSubServicesById(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub Service retrieved Successfully',
    data: result,
  })
})

const updateSubServices = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await SubServicesService.updateSubServices(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub Service updated successfully',
    data: result,
  })
})

const deleteSubServices = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await SubServicesService.deleteSubServices(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SubService deleted successfully',
    data: result,
  })
})

export const SubServicesController = {
  createSubServices,
  getAllSubServices,
  getSubServicesByServiceId,
  getSubServicesById,
  updateSubServices,

  deleteSubServices,
}