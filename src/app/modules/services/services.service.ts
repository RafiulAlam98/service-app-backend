import { IService } from './services.interface'
import { Services } from './services.model'

const createService = async (payload: IService) => {
  const result = await Services.create(payload)
  return result
}
const getAllServices = async () => {
  const result = await Services.find()
  return result
}

export const AllServices = {
  createService,
  getAllServices,
}
