import { Model, Schema } from 'mongoose'

import { IService } from '../services/services.interface'

export type IQuantity = {
  quantityRange?: string
  priceRange?: string
}

export type ITermsAndConditions = {
  title: string
  details: string
}
export type IFaq = {
  query: string
  reply: string
}

export type ISubService = {
  id?: string
  serviceId: Schema.Types.ObjectId | IService
  name: string
  images: string[]
  features: string[]
  description: string
  includedOption?: string[]
  excludedOption?: string[]
  termsCondition?: ITermsAndConditions[]
  warrantyHour?: string
  faq: IFaq[]
  rating?: 0 | 1 | 2 | 3 | 4 | 5
  totalRating: number
}

export type SubServiceModel = Model<ISubService>
