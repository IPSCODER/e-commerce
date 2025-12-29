import { Router } from 'express'
import productRoutes from './modules/product/product.routes'
import authRoutes from './modules/auth/auth.routes'
import paymentRoutes from './modules/payment/payment.routes'

const router = Router()

router.use('/products', productRoutes)
router.use('/auth',authRoutes)
router.use('/payment',paymentRoutes)

export default router
