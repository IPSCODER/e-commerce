import { useState } from "react"
import { useLogin, useRegister } from "./hooks"
import { Navigate, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { isAunthenticated } from "../../utils/auth"

type UserRole = 'USER' | 'ADMIN'

const LoginPage = () => {
  const [isLogin,setIsLogin] = useState(true)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [role, setRole] = useState<UserRole>('USER')
  const loginMutation = useLogin()
  const RegisterMustation = useRegister()
   const navigate = useNavigate()

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
 if(isLogin){
  loginMutation.mutate(
    {email,password},
    {
      onSuccess:(data) => {
        localStorage.setItem('token',data.token)
        localStorage.setItem('role',data.user.role)
        toast.success("Login Successfull")
        if(data.user.role === 'USER'){
          navigate('/') 
        }else{
          navigate('/admin') 
        }
      }
    }
  )
 }else{
  RegisterMustation.mutate(
    {email,password ,role},
    {
      onSuccess:(data) => {
        localStorage.setItem('token',data.token)
        toast.success("Registration Successfull")
      }
    }
  )
 }
  }


  if(isAunthenticated()){
    return <Navigate to={'/'} replace />
  }


    return (
      <>
        <h2 className="mb-4 text-xl font-semibold">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit} >
          <input className="w-full rounded border p-2" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
          <input className="w-full rounded border p-2" type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
          {!isLogin && (
          <select
            className="w-full rounded border p-2"
            value={role}
            onChange={(e) => setRole(e.target.value as UserRole)}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        )}

          <button className="w-full rounded bg-indigo-600 py-2 text-white">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="w-full cursor-pointer ml-auto flex justify-end uppercase mt-5 text-purple-700 text-sm font-bold" onClick={() => {setIsLogin(!isLogin)}} >{!isLogin ? 'Login' : 'Register'}</p>
      </>
    )
  }
  
  export default LoginPage
  