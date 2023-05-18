import { GetProduct } from '../../../domain/services/product/GetProduct'
import { ProductRepository } from '../../../domain/repositories/ProductRepository'
import { Product } from '../../../domain/entities/Product'
import { CreatedProduct, CreateProductParams, FulfilledUploadedFile, RejectedUploadedFile } from '../../../domain/utils/interfaces'
import path from 'path'
import { FileRepository } from '../../../domain/repositories/FileRepository'
import { ProductImageRepository } from '../../../domain/repositories/ProductImageRepository'
import { UuidGenerator } from '../../../domain/utils/UuidGenerator'
import { AlreadyExistsException } from '../../../domain/exceptions/AlreadyExistsException'

export class CreateProductUseCase {
  private readonly _productRespository: ProductRepository
  private readonly _fileRepository: FileRepository
  private readonly _productImageRepository: ProductImageRepository
  private readonly _uuidGenerator: UuidGenerator
  private readonly _getProduct: GetProduct

  constructor (productRepository: ProductRepository, fileRepository: FileRepository, productImageRepository: ProductImageRepository, uuidGenerator: UuidGenerator) {
    this._productRespository = productRepository
    this._fileRepository = fileRepository
    this._productImageRepository = productImageRepository
    this._uuidGenerator = uuidGenerator
    this._getProduct = new GetProduct(productRepository)
  }

  async run (params: CreateProductParams): Promise<CreatedProduct> {
    const foundProduct = await this._getProduct.run({ condition: 'name', conditionValue: params.productData.name, selections: { id: true } })
    if (foundProduct !== null) {
      throw new AlreadyExistsException()
    }

    const productId = this._uuidGenerator.generate()
    const product: Product = {
      id: productId,
      ...params.productData,
      averageRating: 0,
      totalReviews: 0
    }

    try {
      await this._productRespository.createProduct(product)
    } catch (err) {
      console.log(err)
      throw new Error('Error creating product in database')
    }

    const promises = params.images.map(async (file) => {
      const ext = path.extname(file.originalname)
      const productImageId = `${this._uuidGenerator.generate()}${ext}`
      try {
        // Error manejado
        await this._fileRepository.uploadFile(file.buffer, productImageId)
        // TODO: Manejar error como en el uploadFile, que haga un reject con el mensaje de error
        await this._productImageRepository.createProductImage({ id: productImageId, productId })
        return {
          id: productImageId,
          originalname: file.originalname,
          message: null
        }
      } catch (error: any) {
        throw {
          id: null,
          originalname: file.originalname,
          message: error.message
        }
      }
    })

    return {
      product,
      images: await Promise.allSettled(promises) as FulfilledUploadedFile[] | RejectedUploadedFile[]
    }
  }
}
