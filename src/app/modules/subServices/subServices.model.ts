import { Schema, model } from 'mongoose'
import { ISubService, SubServiceModel } from './subServices.interface'

const SubServiceSchema = new Schema<ISubService>({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Service', // Reference to the Feedback model
    required: true,
  },
  elements: {
    type: [String],
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  includedOption: {
    type: [String],
    required: true,
  },
  excludedOption: {
    type: [String],
    required: true,
  },
  termsCondition: {
    type: [String],
    required: true,
  },
  discount: {
    type: String,
    required: false,
  },
  warrantyTime: {
    type: String,
    required: false,
  },
  feedback: {
    type: [String],
    required: true,
  },
  rating: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    required: false,
  },
})

export const SubServices = model<ISubService, SubServiceModel>(
  'sub-services',
  SubServiceSchema,
)
