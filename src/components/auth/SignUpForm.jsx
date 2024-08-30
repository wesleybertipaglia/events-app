import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthProvider'
import { BaseForm } from '../common'

const SignUpForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const { signUp } = useAuthContext()

    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMessage("")

        try {
            const errorMessage = await signUp(name, email, password)
            if (errorMessage) {
                setErrorMessage("Ocorreu um erro: " + errorMessage)
            }
        } catch (error) {
            setErrorMessage("Ocorreu um erro: ", error)
        }
    }

    return (
        <BaseForm title="Cadastrar" handleSubmit={handleSubmit} errorMessage={errorMessage}>
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    maxLength={50}
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    maxLength={100}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    required
                    value={password}
                    maxLength={50}
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Cadastrar
            </button>

            <div className="border-top mt-2 pt-2">
                <p>
                    <span>Já possui conta? </span>
                    <Link to="/entrar">Entre</Link>
                </p>
            </div>
        </BaseForm >
    )
}

export default SignUpForm