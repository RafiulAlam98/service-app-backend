import { Model, Schema } from 'mongoose'

import { IService } from '../services/services.interface'

export type IQuantity = {
  quantityRange?: string
  priceRange?: string
}

export type IServiceTypes = {
  name: string
  cost?: string
  quantity?: IQuantity[]
  systemType?: string
}
export type ITermsAndConditions = {
  title: string
  details: string
}

export type ISubService = {
  id?: string
  title: string
  category: Schema.Types.ObjectId | IService
  serviceTypes: IServiceTypes
  images: string[]
  features: string[]
  description: string
  includedOption?: string[]
  excludedOption?: string[]
  termsCondition?: ITermsAndConditions[]
  discount?: string
  warrantyTime?: string
  feedback?: Schema.Types.ObjectId
  rating?: 0 | 1 | 2 | 3 | 4 | 5
}

export type SubServiceModel = Model<ISubService>
