import { Router } from 'express'
import { getProductByIdController, getProductsController } from './product.controller'

const router = Router()

router.get('/', getProductsController)
router.get('/:id', getProductByIdController)

export default router
