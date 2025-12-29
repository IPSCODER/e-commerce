import toast from "react-hot-toast";
import { createPaymentOrder ,verifyPayment } from "./api";

export const startPayment = async (amount:number) =>{
    const order = await createPaymentOrder(amount)

    const option = {
        key:import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount:order.amount,
        currency:order.currency,
        name:'My E-commerce',
        order_id:order.id,
        handle:async function (response:any) {
            await verifyPayment(response)
            toast.success('payment success')
        }
    }


    const rzp = new (window as any).Razorpay(option)
    rzp.open()


}