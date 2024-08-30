import React, { useState } from 'react'
import { useApi } from '../../hooks'
import { BaseForm } from '../common'
import { useNavigate } from 'react-router'

const EventUpdateForm = ({ event }) => {
    const api = useApi()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")

    const minDate = new Date().toISOString().split("T")[0]
    const [title, setTitle] = useState(event.title || "")
    const [description, setDescription] = useState(event.description || "")
    const [location, setLocation] = useState(event.location || "")
    const [image, setImage] = useState(event.image || "")
    const [date, setDate] = useState(event.date || minDate)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage("")

        try {
            const response = await api.put("/events/" + event.id, { title, description, location, date, image })

            if (response.status == 200) {
                navigate("/perfil")
            }
        } catch (error) {
            setErrorMessage("Ocorreu um erro: ", error)
        }
    }

    return (
        <BaseForm title="Novo Evento" handleSubmit={handleSubmit} errorMessage={errorMessage}>
            <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    required
                    maxLength={100}
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea
                    name="description" id="description"
                    value={description}
                    required
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="location">Localização</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    required
                    maxLength={100}
                    className="form-control"
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="image">Imagem</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    required
                    maxLength={200}
                    className="form-control"
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="date">Data</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    required
                    min={minDate}
                    className="form-control"
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Cadastrar
            </button>
        </BaseForm >
    )
}

export default EventUpdateForm
