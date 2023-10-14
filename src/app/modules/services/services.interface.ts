import { Model } from 'mongoose'

export type IService = {
  id?: string
  name: string
  image?: string
}

export type ServiceModel = Model<IService>
