import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { Orders } from './order.model'
import { IOrders } from './orders.interface'

const createOrder = async (payload: IOrders) => {
  const { slot, date } = payload
  const query = {
    slot: slot,
    date: date,
  }
  const orders = await Orders.find(query)

  if (orders.length) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'You have already booked an order on the selected date and time slot',
    )
  }

  const result = await Orders.create(payload)
  return result
}

const getAllOrder = async () => {
  const result = await Orders.find().populate('order')
  return result
}

const getSingleOrder = async (id: string) => {
  const result = await Orders.findOne({ user: id }).populate('order')
  return result
}

const updateOrder = async (
  id: string,
  paylod: IOrders,
): Promise<IOrders | null> => {
  const result = await Orders.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteOrder = async (id: string) => {
  const existingOrders = await Orders.findById(id)
  if (!existingOrders) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Order Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Orders.findByIdAndDelete(id)
  return result
}

export const OrderService = {
  createOrder,
  getAllOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
}
