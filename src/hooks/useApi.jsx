import axios from 'axios'

const useApi = () => {
    const token = localStorage.getItem("accessToken")
    const api = axios.create({
        baseURL: "http://localhost:8080"
    })

    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    return api
}

export default useApi