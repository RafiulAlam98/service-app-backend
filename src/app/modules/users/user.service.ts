import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'
import mongoose from 'mongoose'
import config from '../../../config'

import ApiError from '../../errors/ApiError'
import { Admin } from '../admin/admin.model'

import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async () => {}

// admin service
const createAdmin = async (user: IUser): Promise<IUser | null> => {
  if (!user.password) {
    user.password = config.password as string
  }

  let newAllUserData = null

  const session = await mongoose.startSession()

  try {
    session.startTransaction()
    const { role, phoneNumber } = user

    if (role === 'admin') {
      const result = await Admin.findOne({ phoneNumber: phoneNumber })
      if (result) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Admin Already Exists')
      }
      const newAdmin = await Admin.create([user], { session })
      if (!newAdmin) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create admin')
      }
      user.admin = newAdmin[0]._id
    }

    const newUser = await User.create([user], { session })
    if (!newUser) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to create a User')
    }

    newAllUserData = newUser[0]

    await session.commitTransaction()
    await session.endSession()
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
  return newAllUserData
}

//get all users
const getAllUserService = async () => {
  const result = await User.find({})
  return result
}

//get single user
const getSingleUser = async (id: string) => {
  const result = await User.findById(id)
  return result
}

const updateSingleUser = async (
  id: string,
  paylod: IUser,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteSingleUserService = async () => {}

const userProfile = async (user: JwtPayload | null) => {
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized')
  }
  const result = await User.find({ phoneNumber: user.phoneNumber })

  return result
}

const updateUserProfile = async () => {}

export const UserService = {
  createUser,
  getAllUserService,
  getSingleUser,
  createAdmin,
  updateUserProfile,
  userProfile,
  updateSingleUser,
  deleteSingleUserService,
}
