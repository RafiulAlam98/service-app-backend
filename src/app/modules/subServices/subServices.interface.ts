import { Model, Types } from 'mongoose'
import { IService } from '../services/services.interface'

export type ISubService = {
  id?: string
  title: string
  category: Types.ObjectId | IService
  elements: string[]
  images: string[]
  cost: string
  features: string[]
  includedOption: string[]
  excludedOption: string[]
  termsCondition: string[]
  discount?: string
  warrantyTime?: string
  feedback?: [string]
  rating?: 0 | 1 | 2 | 3 | 4 | 5
}

export type SubServiceModel = Model<ISubService>
