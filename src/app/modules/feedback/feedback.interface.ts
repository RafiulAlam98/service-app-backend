import { Model, Schema } from 'mongoose'
import { ISubService } from '../subServices/subServices.interface'

export type IFeedback = {
  serviceId: Schema.Types.ObjectId | ISubService
  firstName: string
  lastName?: string
  email: string
  comment: string
  profileImg?: string
  location?: string
  reviewImg?: string
  shortVideo?: string
}
export type FeedBackModel = Model<IFeedback>
