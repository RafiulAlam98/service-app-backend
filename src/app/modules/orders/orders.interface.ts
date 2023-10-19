import { Model, Schema } from 'mongoose'

export type IAddress = {
  house: string
  road: string
  block: string
  sector: string
  area: string
}
export type IOrders = {
  date: string
  slot: string
  email: string
  phone: string
  address: IAddress
  order: Schema.Types.ObjectId
  status: 'pending' | 'shipped' | 'canceled'
}

export type OrdersModel = Model<IOrders>
