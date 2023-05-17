// * DEPENDENCIES
import express from 'express'

// * CONTROLLERS
import {
  getAllBrandsController,
  createBrandController,
  updateBrandByIdController,
  deleteBrandByIdController
} from '../controllers/index'

// * MIDDLEWARES
import { isAuth } from '../middlewares/isAuth'
// TODO: isAdmin middleware create
// import { isAdmin } from "../middlewares/isAdmin"

const router = express.Router()

// * ROUTES
router.get('', getAllBrandsController)

router.post('', [isAuth], createBrandController)

router.put('/:brandId', [isAuth], updateBrandByIdController)

router.delete('/:brandId', [isAuth], deleteBrandByIdController)

export default router
