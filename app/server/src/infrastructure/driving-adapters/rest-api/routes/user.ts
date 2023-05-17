// * DEPENDENCIES
import express from 'express'

// * CONTROLLERS
import {
  createUserController,
  getAllUserController,
  updateUserByIdController,
  deleteUserByIdController
} from '../controllers/index'

// * MIDDLEWARES
import { isAuth } from '../middlewares/isAuth'
// TODO: isAdmin middleware create
// import { isAdmin } from "../middlewares/isAdmin"

const router = express.Router()

// * ROUTES
router.get('', [isAuth], getAllUserController)

router.post('', [isAuth], createUserController)

router.put('/:userId', [isAuth], updateUserByIdController)

router.delete('/:userId', [isAuth], deleteUserByIdController)

export default router
