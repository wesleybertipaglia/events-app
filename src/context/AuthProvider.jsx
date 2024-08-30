import React, { createContext, useContext } from 'react'
import { useAuth } from '../hooks'

const AuthContext = createContext(null)
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const auth = useAuth()

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}