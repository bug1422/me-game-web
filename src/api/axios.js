import axios from "axios"

const BASE_URL = import.meta.env.VITE_BACKEND_URL
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
)

export default api