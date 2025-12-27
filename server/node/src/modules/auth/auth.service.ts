import bycrypt from 'bcrypt'
import {pool} from '../../config/db'
import { generateToken } from './auth.utils'

export const loginUser = async (
    email:string,
    password:string
) => {
    const  {rows} = await pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
    )

    const user = rows[0]
    if(!user) throw new Error('Invalid email or password')

        const isMatch = await bycrypt.compare(password,user.password)
        if(!isMatch) throw new Error('Invalid email or password');

        const token = generateToken({
            id:user.id,
            role:user.role
        })

        return{
            token,
            user:{
                id:user.id,
                email:user.email,
                role:user.role
            }
        }

}

export const registerUser = async (
    email:string,
    password:string
) => {
    const existing = await pool.query(
        `SELECT id FROM users WHERE email = $1`,
        [email]
    )

    if(existing.rows.length > 0) {
        throw new Error('User already exists')
    }

    const hashedPassword = await bycrypt.hash(password,10)

    const {rows} = await pool.query(
        `INSERT INTO users (email, password) VALUES($1, $2) RETURNING id, email, role`,
        [email,hashedPassword]
    )

    const user = rows[0]

    const token = generateToken({
        id:user.id,
        role:user.role
    })

    return {
        token,
        user
    }
}
