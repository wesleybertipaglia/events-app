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
                setUser(response.data.user)
                setToken(response.data.accessToken)
                localStorage.setItem("accessToken", response.data.accessToken)
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

    const updateAccount = async (name, email, image) => {
        try {
            const response = await api.put("/profile", { name, email, image })
            if (response.status === 200) {
                setUser({ ...user, name, email, image })
                navigate("/perfil")
            }
        } catch (error) {
            if (error.response?.status === 401) {
                return "E-mail já está em uso"
            }
            return error.message
        }
    }

    const deleteAccount = async () => {
        try {
            await api.delete("/profile")
            signOut()
        } catch (error) {
            console.error("Ocorreu um erro: ", error)
        }
    }

    return { user, token, loading, signUp, signIn, signOut, updateAccount, deleteAccount }
}

export default useAuth