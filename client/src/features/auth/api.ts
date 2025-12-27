import api from '../../lib/axios'
import type { LoginPayload, AuthResponse, RegisterPayload } from './types'

export const login = async (payload:LoginPayload):Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/login',payload)
    return res.data
}

export const register = async(payload:RegisterPayload):Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/register',payload)
    return res.data
}