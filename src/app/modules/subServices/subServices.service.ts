import { SubServices } from './subServices.model';
import { ISubService } from "./subServices.interface";

const createSubServices = async (payload: ISubService) => {
    const result = await SubServices.create(payload)
    return result
}

export const SubServicesService = {
    createSubServices
}