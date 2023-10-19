import { IReview } from './review.interface'
import { Review } from './review.model'

const addReview = async (payload: IReview) => {
  const result = await Review.create(payload)
  return result
}
const getAllReview = async () => {
  const result = await Review.find().populate('serviceId')
  return result
}
const getSingleReview = async (id: string) => {
  const result = await Review.findOne({ serviceId: id })
  return result
}

export const ReviewService = {
  addReview,
  getAllReview,
  getSingleReview,
}
