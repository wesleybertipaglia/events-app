import React, { useState } from "react"
import { useAuthContext } from "../../context/AuthProvider"
import BaseForm from "../common/BaseForm"

const ProfileUpdateForm = () => {
    const { user, updateAccount } = useAuthContext()
    const [name, setName] = useState(user.name || "")
    const [email, setEmail] = useState(user.email || "")
    const [image, setImage] = useState(user.image || "")
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMessage("")

        try {
            const errorMessage = await updateAccount(name, email, image)
            if (errorMessage) {
                setErrorMessage("Ocorreu um erro: " + errorMessage)
            }
        } catch (error) {
            setErrorMessage("Ocorreu um erro: ", error)
        }
    }

    return (
        <BaseForm title="Atualizar Perfil" handleSubmit={handleSubmit} errorMessage={errorMessage}>
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
                <label htmlFor="image">Foto</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    maxLength={200}
                    className="form-control"
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Atualizar
            </button>
        </BaseForm >
    )
}

export default ProfileUpdateForm