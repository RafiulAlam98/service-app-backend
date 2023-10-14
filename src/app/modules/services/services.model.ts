import { Schema, model } from 'mongoose'
import { IService, ServiceModel } from './services.interface'

const ServiceSchema = new Schema<IService>(
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Services = model<IService, ServiceModel>('services', ServiceSchema)
