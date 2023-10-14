import express from 'express'
import { UserController } from './user.controller'
const router = express.Router()

router.post('/signup', UserController.createUser)
router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getSingleUser)
router.patch('/:id', UserController.updateSingleUser)
router.delete('/:id', UserController.deleteSingleUser)

// router.patch(
//   '/my-profile ',
//   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
//   UserController.updateUserProfile,
// )

// router.get(
//   '/my-profile ',
//   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
//   UserController.userProfile,
// )

export const UserRoutes = {
  router,
}
