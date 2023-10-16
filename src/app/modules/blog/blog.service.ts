import ApiError from '../../errors/ApiError'
import { Blog } from './blog.model'
import { IBlog } from './blog.interface'
import httpStatus from 'http-status'

const createBlog = async (payload: IBlog) => {
  const result = await Blog.create(payload)
  return result
}
const getAllBlog = async () => {
  const result = await Blog.find()
  return result
}

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id)
  return result
}

const updateBlog = async (id: string, paylod: IBlog): Promise<IBlog | null> => {
  const result = await Blog.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteBlog = async (id: string) => {
  const res = await Blog.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Blog Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Blog.findByIdAndDelete(id)
  return result
}

export const AllBlog = {
  createBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
}
