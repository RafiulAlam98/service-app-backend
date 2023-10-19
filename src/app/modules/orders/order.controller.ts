import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { OrderService } from './order.service'

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.createOrder(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Created Successfully',
    data: result,
  })
})
const getAllOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrder()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved Successfully',
    data: result,
  })
})
const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await OrderService.getSingleOrder(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved Successfully',
    data: result,
  })
})

const updateSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await OrderService.updateOrder(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order updated successfully',
    data: result,
  })
})

const deleteSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await OrderService.deleteOrder(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order deleted successfully',
    data: result,
  })
})

export const OrdersController = {
  createOrder,
  getAllOrder,
  getSingleOrder,
  updateSingleOrder,
  deleteSingleOrder,
}
