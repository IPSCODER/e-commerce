import { Request, Response, NextFunction } from 'express'
import { getProductById, getProducts } from './product.service'

export const getProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('🔥 /api/products HIT', req.query)

    const products = await getProducts(req.query)
    res.json(products)
  } catch (error) {
    next(error)
  }
}
export const getProductByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params
  
      const product = await getProductById(id)
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
  