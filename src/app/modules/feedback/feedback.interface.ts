import { Model } from 'mongoose'

export type IFeedback = {
  firstName: string
  lastName?: string
  comment: string
  profileImg?: string
  location?: string
}
export type FeedbackModel = Model<IFeedback>
