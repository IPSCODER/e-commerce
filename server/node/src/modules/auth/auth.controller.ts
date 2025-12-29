import { Response ,Request,NextFunction } from 'express';
import {loginUser, registerUser} from './auth.service';

export const login = async (
    req:Request,res:Response,next:NextFunction
) => {
    try{
        const {email,password} = req.body

        if(!email  || !password){
            throw new Error('Email and Password required');
        }

        const result = await loginUser(email,password)
        res.json(result)
    }catch(err){
        next(err)
    }
}

export const register = async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    try{
        const {email,password ,role} = req.body
        if(!email || !password ){
            throw new Error('Email and Password required')
        }
        const result = await registerUser(email,password ,role)
        return res.status(201).json(result)
    }catch(err){
        next(err)
    }
}