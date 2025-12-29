import { Request,Response,NextFunction } from "express";
import { razorpay } from "../../config/razorpay";
import crypto from 'crypto'



export const createPaymentOrder = async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    try{
        const {amount} = req.body

        const order = await razorpay.orders.create({
            amount:amount * 100,
            currency:'INR',
            receipt:`receipt_${Date.now()}`
        })
        res.json(order)
    }catch(err){
        next(err)
    }
}


export const verifyPayment = async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    try{
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body

        const body = razorpay_order_id + '|' + razorpay_payment_id

        const expectedSignature = crypto.createHmac('sha256',process.env.RAZORPAY_KEY_SECRET!)
        .update(body)
        .digest('hex')

        if(expectedSignature !== razorpay_signature){
            return res.status(400).json({message:'Invalid signature'})
        }

        res.json({success:true})
    }catch(err){
        next(err)
    }
}