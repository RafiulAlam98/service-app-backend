import { IOrders } from './orders.interface'

const createOrder = async (payload: IOrders) => {


}

const getAllOrder = async () => {}

const getSingleOrder = async (id: string) => {}

const updateOrder = async (
  id: string,
  paylod: IOrders,
): Promise<IOrders | null> => {}

const deleteOrder = async (id: string) => {}

export const OrderService = {
  createOrder,
  getAllOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
}
