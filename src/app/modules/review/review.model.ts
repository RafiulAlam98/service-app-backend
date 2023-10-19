import { IReview, ReviewModel } from './review.interface'
import { Schema, model } from 'mongoose'

const ReviewSchema = new Schema<IReview>(
  {
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
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: 'sub-services',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Review = model<IReview, ReviewModel>('review', ReviewSchema)
