import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { SubServicesService } from "./subServices.service";
import { sendResponse } from "../../../shared/sendResponse";
import httpStatus from "http-status";


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
const getSingleSubServices = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await SubServicesService.getSingleSubServices(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sub Service retrieved Successfully',
    data: result,
  })
})

export const SubServicesController = {
  createSubServices,
  getAllSubServices,
  getSingleSubServices,
}