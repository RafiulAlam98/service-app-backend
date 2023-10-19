import { AllBlogController } from './blog.controller'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import express from 'express'

const router = express.Router()

router.post('/', AllBlogController.createBlog)
router.get('/', AllBlogController.getAllBlog)
router.get('/:id', AllBlogController.getSingleBlog)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), AllBlogController.updateBlog)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), AllBlogController.deleteBlog)

export const AllBlogRoutes = {
  router,
}
