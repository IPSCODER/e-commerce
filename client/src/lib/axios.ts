import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Optional: request interceptor
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

// Optional: response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default api
