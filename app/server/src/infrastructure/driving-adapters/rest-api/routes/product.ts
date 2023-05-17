// * DEPENDENCIES
import express from 'express'

// * CONTROLLERS
import {
  createProductController,
  getAllProductController,
  updateProductByIdController,
  deleteProductByIdController
} from '../controllers/index'

// * MIDDLEWARES
import { isAuth } from '../middlewares/isAuth'
import multerUpload from '../middlewares/multerUpload'

const router = express.Router()

// * ROUTES
router.get('', getAllProductController)

router.post('', [isAuth], [multerUpload.array('files')], createProductController)

router.put('/:productId', [isAuth], updateProductByIdController)

router.delete('/:productId', [isAuth], deleteProductByIdController)

export default router
