import { Request, Response } from 'express'

import { AllBlog } from './blog.service'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await AllBlog.createBlog(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Created Successfully',
    data: result,
  })
})
const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await AllBlog.getAllBlog()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved Successfully',
    data: result,
  })
})

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllBlog.getSingleBlog(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved Successfully',
    data: result,
  })
})

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AllBlog.updateBlog(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  })
})

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllBlog.deleteBlog(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  })
})

export const AllBlogController = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}
