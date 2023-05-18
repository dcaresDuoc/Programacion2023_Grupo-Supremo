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
  console.log(req.body)
  console.log(req.files)

  console.log(JSON.parse(req.body.json))


  return {
    productData: JSON.parse(req.body.json),
    images: req.files as Express.Multer.File[]
  }
}
