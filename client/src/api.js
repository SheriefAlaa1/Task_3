import axios from 'axios'

// Use Vite env variable VITE_API_URL in development, fallback to the
// server port used by the backend (.env uses PORT=5001). This prevents
// hardcoding the wrong port which caused ERR_CONNECTION_REFUSED.
const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5001/api'

export const api = axios.create({
  baseURL: BASE
})

// Attach token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
