import { Schema, model } from 'mongoose'
import { IOrders, OrdersModel } from './orders.interface'

const OrderSchema = new Schema<IOrders>(
  {
    date: {
      type: String,
      required: true,
      unique: true,
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: 'sub-services',
      required: true,
    },
    slot: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {
        house: {
          type: String,
          required: false,
        },
        road: {
          type: String,
          required: false,
        },
        block: {
          type: String,
          required: false,
        },
        sector: {
          type: String,
          required: false,
        },
        area: {
          type: String,
          required: false,
        },
      },
      required: false,
    },
    status: {
      type: String,
      enum: ['pending', 'shipped', 'canceled'],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Orders = model<IOrders, OrdersModel>('orders', OrderSchema)
