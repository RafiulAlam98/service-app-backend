import { Schema, model } from 'mongoose'
import { FeedBackModel, IFeedback } from './feedback.interface'

const FeedbackSchema = new Schema<IFeedback>({
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: 'sub-services',
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  reviewImg: {
    type: String,
    required: false,
  },
  shortVideo: {
    type: String,
    required: false,
  },
})

export const FeedBack = model<IFeedback, FeedBackModel>(
  'feedback',
  FeedbackSchema,
)
