// * DEPENDENCIES
import express from 'express'

// * CONTROLLERS
import { loginUserController, logoutUserController, registerUserController, validateUserController } from '../controllers/index'
import { isAuth } from '../middlewares/isAuth'

const router = express.Router()

// * ROUTES
router.get('/logout', logoutUserController)
router.get('/validate', [isAuth], validateUserController)

router.post('/login', loginUserController)
router.post('/register', registerUserController)

export default router
