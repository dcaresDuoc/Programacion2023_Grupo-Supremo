// * DEPENDENCIES
import express from 'express'

// * CONTROLLERS
import {
  getAllSubCategoriesController,
  createSubCategoryController,
  updateSubCategoryByIdController,
  deleteSubCategoryByIdController
} from '../controllers/index'

// * MIDDLEWARES
import { isAuth } from '../middlewares/isAuth'
// TODO: isAdmin middleware create
// import { isAdmin } from "../middlewares/isAdmin"

const router = express.Router()

// * ROUTES
router.get('', getAllSubCategoriesController)

router.post('', [isAuth], createSubCategoryController)

router.put('/:subCategoryId', [isAuth], updateSubCategoryByIdController)

router.delete('/:subCategoryId', [isAuth], deleteSubCategoryByIdController)

export default router
