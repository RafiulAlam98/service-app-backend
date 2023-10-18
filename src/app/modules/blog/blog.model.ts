import { BlogModel, IBlog } from './blog.interface'
import { Schema, model } from 'mongoose'

const BlogSchema = new Schema<IBlog>(
  {
    blogTitle: {
      type: String,
      required: true,
    },
    blogDescription: {
      type: String,
      required: false,
    },
    blogWriter: {
      type: String,
      required: false,
    },
    writerProfileImg: {
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

export const Blog = model<IBlog, BlogModel>('blog', BlogSchema)
