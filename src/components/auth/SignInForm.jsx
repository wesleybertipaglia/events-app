import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../../context/AuthProvider"
import { BaseForm } from "../common"

const SignInForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const { signIn } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage("")

        try {
            const errorMessage = await signIn(email, password)
            if (errorMessage) {
                setErrorMessage("Ocorreu um erro: " + errorMessage)
            }
        } catch (error) {
            setErrorMessage("Ocorreu um erro: " + error.message)
        }
    }

    return (
        <BaseForm title="Entrar" handleSubmit={handleSubmit} errorMessage={errorMessage}>
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
            <button type="submit" className="btn btn-primary mt-3">Enviar</button>

            <div className="border-top mt-2 pt-2">
                <p>
                    <span>Ainda não possui conta? </span>
                    <Link to="/cadastrar">Cadastre-se</Link>
                </p>
            </div>
        </BaseForm>
    )
}

export default SignInForm