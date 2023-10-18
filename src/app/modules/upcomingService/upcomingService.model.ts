import { Schema, model } from 'mongoose'
import {
  IUpcomingService,
  UpcomingServiceModel,
} from './upcomingService.interface'

const UpcomingServiceSchema = new Schema<IUpcomingService>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
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

export const UpcomingService = model<IUpcomingService, UpcomingServiceModel>(
  'upcoming-service',
  UpcomingServiceSchema,
)
