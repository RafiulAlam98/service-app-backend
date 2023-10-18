import { Model } from 'mongoose'

export type IBlog = {
  blogTitle: string
  blogDescription: string
  blogWriter: string
  writerProfileImg: string
}

export type BlogModel = Model<IBlog>
