import ApiError from '../../errors/ApiError'
import { IService } from './services.interface'
import { Services } from './services.model'
import httpStatus from 'http-status'

const createService = async (payload: IService) => {
  const result = await Services.create(payload)
  return result
}
const getAllServices = async () => {
  const result = await Services.find()
  return result
}

const getSingleServices = async (id: string) => {
  const result = await Services.findById(id)
  return result
}

const updateServices = async (
  id: string,
  paylod: IService,
): Promise<IService | null> => {
  const result = await Services.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteServices = async (id: string) => {
  const services = await Services.findById(id)
  if (!services) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Services Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Services.findByIdAndDelete(id)
  return result
}

export const AllServices = {
  createService,
  getAllServices,
  updateServices,
  deleteServices,
  getSingleServices,
}
