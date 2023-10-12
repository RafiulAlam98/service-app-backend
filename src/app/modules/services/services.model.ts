import { Schema, model } from 'mongoose'
import { IService, ServiceModel } from './services.interface'

const ServiceSchema = new Schema<IService>({
  name: {
    type: String,
    required: true,
  },
})

export const Services = model<IService, ServiceModel>('services', ServiceSchema)
