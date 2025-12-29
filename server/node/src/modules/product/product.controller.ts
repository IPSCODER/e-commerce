import { Request, Response, NextFunction } from 'express'
import { getProductById, getProducts } from './product.service'
import { createProduct, deleteProduct, updateProduct } from './product.repository'

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
  

  export const createProductController = async (req:Request,res:Response,next:NextFunction) => {
    try{
      const product = await createProduct(req.body)
      res.status(201).json(product)
    }catch(err){
      next(err)
    }
  }

  export const updateProductController = async (req:Request,res:Response,next:NextFunction) => {
    try{
      const product = await updateProduct(req.params.id,req.body)
      res.json(product)
    }catch(err){
      next(err)
    }
  }

  export const deleteProductController = async (req:Request,res:Response,next:NextFunction) => {
    try{
      const product = await deleteProduct(req.params.id)
      res.status(204).send()
    }catch(err){
      next(err)
    }
  }