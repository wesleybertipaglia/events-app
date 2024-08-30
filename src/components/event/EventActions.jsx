import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApi } from '../../hooks'
import { useAuthContext } from '../../context/AuthProvider'

const EventActions = ({ eventId, isOwner, isAttendingFirst }) => {
    const navigate = useNavigate()
    const api = useApi()
    const { user } = useAuthContext()
    const [isAttending, setIsAttending] = useState(isAttendingFirst)

    const attendEvent = async (e) => {
        e.preventDefault()
        if (!user) {
            return navigate("/entrar")
        }
        if (!isOwner) {
            try {
                const response = await api.post(`/events/${eventId}/attend`)
                if (response.status === 204) {
                    setIsAttending(true)
                }
            } catch (error) {
                console.error("Ocorreu um erro: ", error)
            }
        }
    }

    const unattendEvent = async (e) => {
        e.preventDefault()

        if (!isOwner && isAttending) {
            try {
                const response = await api.post(`/events/${eventId}/unattend`)
                if (response.status === 204) {
                    setIsAttending(false)
                }
            } catch (error) {
                console.error("Ocorreu um erro: ", error)
            }
        }
    }

    const deleteEvent = async (e) => {
        e.preventDefault()

        if (isOwner) {
            try {
                const response = await api.delete(`/events/${eventId}`)

                if (response.status === 204) {
                    navigate("/perfil")
                }
            } catch (error) {
                console.error("Ocorreu um erro: ", error)
            }
        }
    }

    return (
        <>
            {isOwner ? (
                <div className='d-flex gap-2'>
                    <Link to="editar" className='btn btn-primary w-50'>Editar</Link>
                    <button onClick={deleteEvent} className='btn btn-danger w-50'>Excluir</button>
                </div>
            ) : (
                isAttending ? (
                    <button onClick={unattendEvent} className='btn btn-danger w-100'>Cancelar Participação</button>
                ) : (
                    <button onClick={attendEvent} className='btn btn-success w-100'>Participar</button>
                )
            )}
        </>
    )
}

export default EventActions