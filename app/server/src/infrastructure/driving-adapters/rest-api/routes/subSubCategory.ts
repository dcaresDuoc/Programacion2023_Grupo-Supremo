// * DEPENDENCIES
import express from 'express'

// * CONTROLLERS
import {
  getAllSubSubCategoriesController,
  createSubSubCategoryController,
  updateSubSubCategoryByIdController,
  deleteSubSubCategoryByIdController
} from '../controllers/index'

// * MIDDLEWARES
import { isAuth } from '../middlewares/isAuth'
// TODO: isAdmin middleware create
// import { isAdmin } from "../middlewares/isAdmin"

const router = express.Router()

// * ROUTES
router.get('', getAllSubSubCategoriesController)

router.post('', [isAuth], createSubSubCategoryController)

router.put('/:subSubCategoryId', [isAuth], updateSubSubCategoryByIdController)

router.delete('/:subSubCategoryId', [isAuth], deleteSubSubCategoryByIdController)

export default router
