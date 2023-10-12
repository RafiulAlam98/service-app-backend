import { Schema, model } from 'mongoose'
import { ISubService, SubServiceModel } from './subServices.interface'

const SubServiceSchema = new Schema<ISubService>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'services', // Reference to the Feedback model
      required: true,
    },
    serviceTypes: [
      {
        name: {
          type: String,
          required: true,
        },
        cost: {
          type: String,
          required: true,
        },
      },
    ],
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
    discount: {
      type: String,
      required: false,
    },
    warrantyTime: {
      type: String,
      required: false,
    },
    feedback: {
      type: Schema.Types.ObjectId,
      ref: 'feedback',
      required: true,
    },
    rating: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
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
