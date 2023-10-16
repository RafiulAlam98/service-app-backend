import { Model } from "mongoose"

export type IFaq = {
  id: string
  query: string
  reply:string
}

export type FaqModel = Model<IFaq>