// * DEPENDENCIES
import express from 'express'

// * CONTROLLERS
import {
  getAllCategoriesController,
  createCategoryController,
  updateCategoryByIdController,
  deleteCategoryByIdController
} from '../controllers/index'

// * MIDDLEWARES
import { isAuth } from '../middlewares/isAuth'
// TODO: isAdmin middleware create
// import { isAdmin } from "../middlewares/isAdmin"

const router = express.Router()

// * ROUTES
router.get('', getAllCategoriesController)

router.post('', [isAuth], createCategoryController)

router.put('/:categoryId', [isAuth], updateCategoryByIdController)

router.delete('/:categoryId', [isAuth], deleteCategoryByIdController)

export default router
