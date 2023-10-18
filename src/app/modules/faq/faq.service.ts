import ApiError from '../../errors/ApiError'
import { IFaq } from './faq.interface'
import { faq } from './faq.model'
import httpStatus from 'http-status'

const createFaq = async (payload: IFaq) => {
  const result = await faq.create(payload)
  return result
}
const getAllFaq = async () => {
  const result = await faq.find()
  return result
}

const getSingleFaq = async (id: string) => {
  const result = await faq.findById(id)
  return result
}

const updateFaq = async (id: string, paylod: IFaq): Promise<IFaq | null> => {
  const result = await faq.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteFaq = async (id: string) => {
  const res = await faq.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Faq Not Found and Deletion Unsuccessfull',
    )
  }
  const result = faq.findByIdAndDelete(id)
  return result
}

export const Allfaq = {
  createFaq,
  getAllFaq,
  updateFaq,
  deleteFaq,
  getSingleFaq,
}
