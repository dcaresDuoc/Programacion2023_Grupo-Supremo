import { updateSubSubCategoryById } from './subSubCategory/updateSubSubCategoryById'
import { deleteSubSubCategoryById } from './subSubCategory/deleteSubSubCategoryById'
import { updateSubCategoryById } from './subCategory/updateSubCategoryById'
import { createSubCategory } from './subCategory/createSubCategory'
import { getAllSubSubCategories } from './subSubCategory/getAllSubSubCategories'
import { createSubSubCategory } from './subSubCategory/createSubSubCategory'
import { getAllSubCategories } from './subCategory/getAllSubCategories'
import { deleteSubCategoryById } from './subCategory/deleteSubCategoryById'
import { updateCategoryById } from './category/updateCategoryById'
import { createCategory } from './category/createCategory'
import { getAllCategories } from './category/getAllCategories'
import { deleteCategoryById } from './category/deleteCategoryById'

import { updateBrandById } from './brand/updateProductById'
import { createBrand } from './brand/createBrand'
import { getAllBrands } from './brand/getAllBrands'
import { deleteBrandById } from './brand/deleteBrandById'
// * AUTH
import { registerUser } from './auth/registerUser'
import { loginUser } from './auth/loginUser'
import { logoutUser } from './auth/logoutUser'
import { validateUser } from './auth/validateUser'

// * USER
import { getAllUser } from './user/getAllUser'
import { createUser } from './user/createUser'
import { updateUserById } from './user/updateUserById'
import { deleteUserById } from './user/deleteUserById'

// * PRODUCT
import { getAllProduct } from './product/getAllProduct'
import { createProduct } from './product/createProduct'
import { updateProductById } from './product/updateProductById'
import { deleteProductById } from './product/deleteProductById'

// * FILE
import { streamFileById } from './file/streamFileById'
import { deleteFileById } from './file/deleteFileById'

export {
  // * AUTH
  logoutUser as logoutUserController,
  validateUser as validateUserController,
  loginUser as loginUserController,
  registerUser as registerUserController,
  // * USER
  getAllUser as getAllUserController,
  createUser as createUserController,
  updateUserById as updateUserByIdController,
  deleteUserById as deleteUserByIdController,
  // * PRODUCT
  getAllProduct as getAllProductController,
  createProduct as createProductController,
  updateProductById as updateProductByIdController,
  deleteProductById as deleteProductByIdController,
  // * FILE
  streamFileById as streamFileByIdController,
  deleteFileById as deleteFileByIdController,
  // * BRAND
  getAllBrands as getAllBrandsController,
  createBrand as createBrandController,
  updateBrandById as updateBrandByIdController,
  deleteBrandById as deleteBrandByIdController,
  // * CATEGORY
  getAllCategories as getAllCategoriesController,
  createCategory as createCategoryController,
  updateCategoryById as updateCategoryByIdController,
  deleteCategoryById as deleteCategoryByIdController,
  // * SUBCATEGORY
  getAllSubCategories as getAllSubCategoriesController,
  createSubCategory as createSubCategoryController,
  updateSubCategoryById as updateSubCategoryByIdController,
  deleteSubCategoryById as deleteSubCategoryByIdController,
  // * SUBSUBCATEGORY
  getAllSubSubCategories as getAllSubSubCategoriesController,
  createSubSubCategory as createSubSubCategoryController,
  updateSubSubCategoryById as updateSubSubCategoryByIdController,
  deleteSubSubCategoryById as deleteSubSubCategoryByIdController
}
