import { Model } from 'mongoose'

export type IUpcomingService = {
  id?: string
  name: string
  description: string
  image?: string
}

export type UpcomingServiceModel = Model<IUpcomingService>
