import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useApi } from '.'

const useAuth = () => {
    const api = useApi()
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [token, setToken] = useState(() => localStorage.getItem('accessToken'))
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                try {
                    const response = await api.get('/profile')
                    setUser(response.data)
                } catch (error) {
                    console.error('Ocorreu um erro: ', error)
                }
            }

            setLoading(false)
        }

        fetchUser()
    }, [])

    const signUp = async (name, email, password) => {
        try {
            const response = await api.post("/auth/signup", { name, email, password })

            if (response.status === 200) {
                navigate("/entrar")
            }
        } catch (error) {
            if (error.response?.status === 401) {
                return "E-mail já está em uso"
            }
            return error.message
        }
    }

    const signIn = async (email, password) => {
        try {
            const response = await api.post("/auth/signin", { email, password })

            if (response.status === 200) {
                localStorage.setItem("accessToken", token)
                setToken(token)
                setUser(user)
                navigate("/")
            }
        } catch (error) {
            if (error.response?.status === 401) {
                return "Credenciais incorretas"
            }

            return error.message
        }
    }

    const signOut = () => {
        localStorage.removeItem("accessToken")
        setToken(null)
        setUser(null)
        navigate("/")
    }

    return { user, token, loading, signUp, signIn, signOut }
}

export default useAuth
