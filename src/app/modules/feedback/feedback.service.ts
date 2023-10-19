import { Feedback } from './feedback.model'
import { IFeedback } from './feedback.interface'

const addFeedback = async (payload: IFeedback) => {
  const result = await Feedback.create(payload)
  return result
}
const getAllFeedback = async () => {
  const result = await Feedback.find()
  return result
}
const getSingleFeedback = async (id: string) => {
  const result = await Feedback.findById(id)
  return result
}

export const FeedbackService = {
  addFeedback,
  getAllFeedback,
  getSingleFeedback,
}
