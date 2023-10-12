import { IService } from './services.interface'
import { Services } from './services.model'

const createService = async (payload: IService) => {
  const result = await Services.create(payload)
  return result
}

export const AllServices = {
  createService,
}
