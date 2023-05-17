import { isProductOmitIdAverageRatingTotalReviews } from '../../../../../domain/utils/isProductOmitIdAverageRatingTotalReviews'
// * EXCEPTIONS
import { WrongTypeException } from '../../../../../domain/exceptions/WrongTypeException'
import { MissingFieldInBodyException } from '../../../../../domain/exceptions/MissingFieldInBodyException'
import { FieldsNotRequiredInBodyException } from '../../../../../domain/exceptions/FieldsNotRequiredException'

// * TYPES AND INTERFACES
import { Request } from 'express'
import { CreateProductParams } from '../../../../../domain/utils/interfaces'

// TODO: Faltaría validar la que la imagen venga
// TODO: Faltaría validar el tamaño de la imagen no sea mayor a 5gb
export const CreateProductDto = (req: Request): CreateProductParams => {
  if (req.body === undefined || req.body === null) {
    throw new MissingFieldInBodyException()
  }

  if (typeof req.body !== 'object') {
    throw new WrongTypeException()
  }

  try {
    Object.keys(req.body)
  } catch (err) {
    throw new WrongTypeException()
  }

  const { json } = req.body
  if (json === undefined || json === null || typeof json !== 'string') {
    throw new MissingFieldInBodyException()
  }

  try {
    JSON.parse(json)
  } catch (err: any) {
    throw new WrongTypeException()
  }

  const parsedJson = JSON.parse(json)

  if (!isProductOmitIdAverageRatingTotalReviews(parsedJson)) {
    throw new FieldsNotRequiredInBodyException()
  }

  const { name, description, price, brandId, stock, categoryId, subCategoryId, subSubCategoryId } = parsedJson

  if (name === undefined || name === null || name === '') {
    throw new MissingFieldInBodyException()
  }

  if (typeof name !== 'string') {
    throw new WrongTypeException()
  }

  if (description === undefined || description === null || description === '') {
    throw new MissingFieldInBodyException()
  }

  if (typeof description !== 'string') {
    throw new WrongTypeException()
  }

  if (price === undefined || price === null || price === 0) {
    throw new MissingFieldInBodyException()
  }

  if (typeof price !== 'number') {
    throw new WrongTypeException()
  }

  if (brandId === undefined || brandId === null || brandId === '') {
    throw new MissingFieldInBodyException()
  }

  if (typeof brandId !== 'string') {
    throw new WrongTypeException()
  }

  if (stock === undefined || stock === null || stock === 0) {
    throw new MissingFieldInBodyException()
  }

  if (typeof stock !== 'number') {
    throw new WrongTypeException()
  }

  if (categoryId === undefined || categoryId === null || categoryId === '') {
    throw new MissingFieldInBodyException()
  }

  if (typeof categoryId !== 'string') {
    throw new WrongTypeException()
  }

  if (subCategoryId === undefined || subCategoryId === null || subCategoryId === '') {
    throw new MissingFieldInBodyException()
  }

  if (typeof subCategoryId !== 'string') {
    throw new WrongTypeException()
  }

  if (subSubCategoryId === undefined || subSubCategoryId === null || subSubCategoryId === '') {
    throw new MissingFieldInBodyException()
  }

  if (typeof subSubCategoryId !== 'string') {
    throw new WrongTypeException()
  }

  // * VALIDATE IMAGE
  if (typeof req.files !== 'object') {
    throw new WrongTypeException()
  }

  if (req.files.length === undefined || req.files.length === null) {
    throw new WrongTypeException()
  }

  if (req.files.length === 0) {
    throw new MissingFieldInBodyException()
  }

  return {
    productData: parsedJson,
    images: req.files as Express.Multer.File[]
  }
}
