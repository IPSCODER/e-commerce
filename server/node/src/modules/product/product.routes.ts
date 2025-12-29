import { Router } from 'express'
import { createProductController, getProductByIdController, getProductsController, updateProductController } from './product.controller'
import { authenticate } from '../../middlewares/auth.middleware'
import { isAdmin } from '../../middlewares/admin.middleware'

const router = Router()

router.get('/', getProductsController)
router.get('/:id', getProductByIdController)
router.post('/',authenticate,isAdmin,createProductController)
router.put('/:id',authenticate,isAdmin,updateProductController)
router.delete('/:id',authenticate,isAdmin,updateProductController)

export default router
