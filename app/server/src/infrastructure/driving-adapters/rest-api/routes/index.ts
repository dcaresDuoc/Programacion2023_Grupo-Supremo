import { Request, Response, Router, NextFunction } from 'express'
import userRoutes from './user'
import authRoutes from './auth'
import brandRoutes from './brand'
import productRoutes from './product'
import fileRoutes from './file'
import categoryRoutes from './category'
import subCategoryRoutes from './subCategory'
import subSubCategoryRoutes from './subSubCategory'

import { Exception } from '../../../../domain/exceptions/Exception'

const router = Router()

router.use('/api/auth', authRoutes)
router.use('/api/users', userRoutes)
router.use('/api/products', productRoutes)
router.use('/api/files', fileRoutes)
router.use('/api/brands', brandRoutes)
router.use('/api/categories', categoryRoutes)
router.use('/api/subCategories', subCategoryRoutes)
router.use('/api/subSubCategories', subSubCategoryRoutes)

// Son middlewares para manejar errores de Node.JS
// Se supone que estos son errores controlados
// Para que en los casos de uso se pueda hacer un throw new Exception('message') y se pueda capturar acá
// Para que en los dtos se pueda hacer un throw new Exception('message') y se pueda capturar acá ó también podrían hacer un next(new Exception('message'))
router.use((err: Error | any, req: Request, res: Response, next: NextFunction) => {
  let language = 'en'
  if (req.headers['accept-language'] !== undefined) {
    language = req.headers['accept-language'].split(',')[0]
  }

  if (err.joiValidation === true) {
    return res.status(400).json({
      message: err.message
    })
  }

  if (err instanceof Exception) {
    return res.status(err.statusCode).json({
      // todos estos mensajes deben estar en una calpetica
      message: language.includes('es') ? err.spanishMessage : err.message
    })
  } else {
    return next(err)
  }
})

// Son middlewares para manejar errores de Node.JS
// Estos son errores no controlados y es bueno acá aplicar un logger e imprimir el error para verlo desde los logs al momento de dedployar el servidor
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  res.status(500)
  // Aca sería bueno enviar un mensaje mas decente al frontend
  return res.json({
    error: err
  })
})

export default router
