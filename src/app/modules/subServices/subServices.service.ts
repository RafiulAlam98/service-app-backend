import { SubServices } from './subServices.model';
import { ISubService } from "./subServices.interface";

const createSubServices = async (payload: ISubService) => {
    const result = await SubServices.create(payload)
    return result
}

const getAllSubServices = async () => {
  const result = await SubServices.find().populate('category')
  return result
}

const getSingleSubServices = async (id: string) => {
  const result = await SubServices.findById(id).populate('category')
  return result
}

export const SubServicesService = {
  createSubServices,
  getAllSubServices,
  getSingleSubServices,
}