import ApiError from '../../errors/ApiError'

import httpStatus from 'http-status'
import { IUpcomingService } from './upcomingService.interface'
import { UpcomingService } from './upcomingService.model'

const createUpcomingService = async (payload: IUpcomingService) => {
  const result = await UpcomingService.create(payload)
  return result
}
const getAllUpcomingService = async () => {
  const result = await UpcomingService.find()
  return result
}

const getSingleUpcomingService = async (id: string) => {
  const result = await UpcomingService.findById(id)
  return result
}

const updateUpcomingService = async (
  id: string,
  paylod: IUpcomingService,
): Promise<IUpcomingService | null> => {
  const result = await UpcomingService.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteUpcomingService = async (id: string) => {
  const res = await UpcomingService.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Upcoming Service Not Found and Deletion Unsuccessfull',
    )
  }
  const result = UpcomingService.findByIdAndDelete(id)
  return result
}

export const AllUpcomingService = {
  createUpcomingService,
  getAllUpcomingService,
  updateUpcomingService,
  deleteUpcomingService,
  getSingleUpcomingService,
}
