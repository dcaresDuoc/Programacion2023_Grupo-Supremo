import { SubSubCategory } from '../entities/SubSubCategory'
import { SubCategory } from '../entities/SubCategory'
import { Category } from '../entities/Category'
import { Brand } from '../entities/Brand'
import { Response } from 'express'
import { Product } from '../entities/Product'
import { User } from '../entities/User'

// * UTILS
export interface UploadedFileStatus {
  id: string
  originalname: string
  message: string | null
}

export interface FulfilledUploadedFile {
  status: string
  value: UploadedFileStatus
}

export interface RejectedUploadedFile {
  status: string
  reason: UploadedFileStatus
}

// # Los driving-adapters ya sea una app de consola, rest api o un graphQL deben impementar un DTO antes para así pasarle los datos correctos al caso de uso.
// # Cada caso de uso debe tener un Params

// # AUTH USE CASES AND SERVICES
export interface LoginUserParams {
  userData: Pick<User, 'email' | 'password'>
}

export interface RegisterUserParams {
  userData: Omit<User, 'id'>
}

// ? AUTH USE CASES RETURN
export interface AuthenticatedUser {
  currentUser: Omit<User, 'password'>
  sessionJwt: string
}

// # USER USE CASES AND SERVICES
export interface CreateUserParams {
  userData: Omit<User, 'id'>
}

export interface UpdateUserByIdParams {
  userId: string
  userData: Partial<Omit<User, 'id'>>
}

export type FindUserConditions = 'id' | 'name' | 'email'
export type FindUserValues = number | string
export type UserSelections = Partial<{
  id: boolean
  name: boolean
  email: boolean
  password: boolean
}>

export interface GetUserParams {
  condition: FindUserConditions
  conditionValue: FindUserValues
  selections: UserSelections
}

// # PRODUCT USE CASES AND SERVICES
/* export interface PartialProduct {
  name: string
  description: string
  price: number
  brandId: string
  stock: number
  categoryId: string
  subCategoryId: string
  subSubCategoryId: string
} */

export interface CreateProductParams {
  productData: Omit<Product, 'id' | 'averageRating' | 'totalReviews'>
  images: Express.Multer.File[]
}

export interface UpdateProductByIdParams {
  productId: string
  productData: Partial<Omit<Product, 'id'>>
}

export type FindProductConditions = 'id' | 'name' | 'description' | 'price' | 'brandId' | 'stock' | 'categoryId' | 'subCategoryId' | 'subSubCategoryId'
export type FindProductValues = string | number
export type ProductSelections = Partial<{
  id: boolean
  name: boolean
  description: boolean
  price: boolean
  brandId: boolean
  stock: boolean
  averageRating: boolean
  totalReviews: boolean
  categoryId: boolean
  subCategoryId: boolean
  subSubCategoryId: boolean
}>

export interface GetProductParams {
  condition: FindProductConditions
  conditionValue: FindProductValues
  selections: ProductSelections | boolean
}

// ? PRODUCT USE CASES RETURN
export interface CreatedProduct {
  product: Product
  images: FulfilledUploadedFile[] | RejectedUploadedFile[]
}

// # FILE USE CASES AND SERVICES
export interface StreamFileByIdParams {
  id: string
  res: Response
}

export interface DeleteFileByIdParams {
  id: string
}

// # CATEGORY USE CASES AND SERVICES
export interface CreateCategoryParams {
  categoryData: Omit<Category, 'id'>
}

export interface UpdateCategoryByIdParams {
  categoryId: string
  categoryData: Partial<Omit<Category, 'id'>>
}

export type FindCategoryConditions = 'id' | 'name'
export type FindCategoryValues = string
export type CategorySelections = Partial<{
  id: boolean
  name: boolean
}>

export interface GetCategoryParams {
  condition: FindCategoryConditions
  conditionValue: FindCategoryValues
  selections: CategorySelections | boolean
}

// # SUB CATEGORY USE CASES AND SERVICES

export interface CreateSubCategoryParams {
  subCategoryData: Omit<SubCategory, 'id'>
}

export interface UpdateSubCategoryByIdParams {
  subCategoryId: string
  subCategoryData: Partial<Omit<SubCategory, 'id'>>
}

export type FindSubCategoryConditions = 'id' | 'name'
export type FindSubCategoryValues = string
export type SubCategorySelections = Partial<{
  id: boolean
  name: boolean
}>

export interface GetSubCategoryParams {
  condition: FindSubCategoryConditions
  conditionValue: FindSubCategoryValues
  selections: SubCategorySelections | boolean
}

// # SUB CATEGORY USE CASES AND SERVICES

export interface CreateSubSubCategoryParams {
  subSubCategoryData: Omit<SubSubCategory, 'id'>
}

export interface UpdateSubSubCategoryByIdParams {
  subSubCategoryId: string
  subSubCategoryData: Partial<Omit<SubSubCategory, 'id'>>
}

export type FindSubSubCategoryConditions = 'id' | 'name'
export type FindSubSubCategoryValues = string
export type SubSubCategorySelections = Partial<{
  id: boolean
  name: boolean
}>

export interface GetSubSubCategoryParams {
  condition: FindSubSubCategoryConditions
  conditionValue: FindSubSubCategoryValues
  selections: SubSubCategorySelections | boolean
}

// # BRAND USE CASES AND SERVICES
export interface CreateBrandParams {
  brandData: Omit<Brand, 'id'>
}

export interface UpdateBrandByIdParams {
  brandId: string
  brandData: Partial<Omit<Brand, 'id'>>
}

export type FindBrandConditions = 'id' | 'name'
export type FindBrandValues = string
export type BrandSelections = Partial<{
  id: boolean
  name: boolean
}>

export interface GetBrandParams {
  condition: FindBrandConditions
  conditionValue: FindBrandValues
  selections: BrandSelections | boolean
}
