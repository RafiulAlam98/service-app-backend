import { FeedbackModel, IFeedback } from './feedback.interface'
import { Schema, model } from 'mongoose'

const FeedbackSchema = new Schema<IFeedback>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Feedback = model<IFeedback, FeedbackModel>(
  'feedback',
  FeedbackSchema,
)
