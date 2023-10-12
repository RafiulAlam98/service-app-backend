import { IFeedback } from './feedback.interface'
import { FeedBack } from './feedback.model'

const addFeedback = async (payload: IFeedback) => {
  const result = await FeedBack.create(payload)
  return result
}
const getAllFeedBacks = async () => {
  const result = await FeedBack.find().populate('serviceId')
  return result
}

export const FeedbackServices = {
  addFeedback,
  getAllFeedBacks,
}
