import api from "../../lib/axios";

export const createPaymentOrder = async (amount:number) =>{
    const res= await api.post('/payment/create-order',{amount})
    return res.data
}

export const verifyPayment= async(payload:any) =>{
    const res = await api.post('/payment/verify',payload)
    return res.data
}