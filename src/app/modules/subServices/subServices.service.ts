import ApiError from '../../errors/ApiError'
import { ISubService } from './subServices.interface'
import { SubServices } from './subServices.model'
import httpStatus from 'http-status'

const createSubServices = async (payload: ISubService) => {
  const result = await SubServices.create(payload)
  return result
}

const getAllSubServices = async () => {
  const result = await SubServices.find().populate('serviceId')
  return result
}

const getSubServicesByServiceId = async (id: string) => {
  const result = await SubServices.find({ serviceId: id }).populate('serviceId')
  return result
}
const getSubServicesById = async (id: string) => {
  const result = await SubServices.findById(id).populate('serviceId')
  return result
}

const updateSubServices = async (
  id: string,
  paylod: ISubService,
): Promise<ISubService | null> => {
  const result = await SubServices.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteSubServices = async (id: string) => {
  const subServices = await SubServices.findById(id)
  if (!subServices) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'SubServices Not Found and Deletion Unsuccessfull',
    )
  }
  const result = SubServices.findByIdAndDelete(id)
  return result
}

export const SubServicesService = {
  createSubServices,
  getAllSubServices,
  getSubServicesByServiceId,
  getSubServicesById,
  updateSubServices,
  deleteSubServices,
}
