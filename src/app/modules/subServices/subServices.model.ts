import { ISubService, SubServiceModel } from './subServices.interface'
import { Schema, model } from 'mongoose'

const SubServiceSchema = new Schema<ISubService>(
  {
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: 'services',
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    images: {
      type: [String],
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    includedOption: {
      type: [String],
      required: false,
    },
    excludedOption: {
      type: [String],
      required: false,
    },
    termsCondition: [
      {
        title: {
          type: String,
          required: false,
        },
        details: {
          type: String,
          required: false,
        },
      },
    ],
    warrantyHour: {
      type: String,
      required: false,
    },
    faq: [
      {
        query: {
          type: String,
          required: false,
        },
        reply: {
          type: String,
          required: false,
        },
      },
    ],
    rating: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      required: false,
    },
    totalRating: {
      type: Number,
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

export const SubServices = model<ISubService, SubServiceModel>(
  'sub-services',
  SubServiceSchema,
)
