// * DEPENDENCIES
import express from 'express'

// * CONTROLLERS
import { streamFileByIdController, deleteFileByIdController } from '../controllers/index'

const router = express.Router()

// * ROUTES
router.get('/:fileId', streamFileByIdController)
router.delete('/:fileId', deleteFileByIdController)

export default router
