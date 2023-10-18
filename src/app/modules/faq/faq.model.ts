import { FaqModel, IFaq } from './faq.interface'
import { Schema, model } from 'mongoose'

const FaqSchema = new Schema<IFaq>(
  {
    query: {
      type: String,
      required: true,
    },
    reply: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const faq = model<IFaq, FaqModel>('faq', FaqSchema)
