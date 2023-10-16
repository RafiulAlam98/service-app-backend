import { AllFaqController } from './faq.controller'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import express from 'express'

const router = express.Router()

router.post('/', auth(ENUM_USER_ROLE.ADMIN), AllFaqController.createFaq)
router.get('/', AllFaqController.getAllfaq)
router.get('/:id', AllFaqController.getSingleFaq)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), AllFaqController.updateFaq)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), AllFaqController.deleteFaq)

export const AllFaqRoutes = {
  router,
}
