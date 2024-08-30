import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApi, useFetch } from '../../hooks'
import { useAuthContext } from '../../context/AuthContext'

const EventActions = ({ eventId }) => {
    const navigate = useNavigate()
    const api = useApi()
    const { user } = useAuthContext()
    const { data: isOwner, loading: loadingOwner } = useFetch(`/events/${eventId}/is-owner`)
    const { data: isAttendingData, loading: loadingIsAttendingData } = useFetch(`/events/${eventId}/is-attending`)
    const [isAttending, setIsAttending] = useState(false)

    const attendEvent = async (e) => {
        e.preventDefault()
        if (!user) {
            return navigate("/entrar")
        }
        if (!loadingOwner && !isOwner) {
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
        if (!user) {
            return navigate("/entrar")
        }
        if (!loadingOwner && !isOwner && isAttending) {
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

        if (!loadingOwner && isOwner) {
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

    useEffect(() => {
        if (!loadingIsAttendingData && isAttendingData !== undefined) {
            setIsAttending(isAttendingData)
        }
    }, [loadingIsAttendingData, isAttendingData])

    if (loadingOwner || loadingIsAttendingData) {
        return <p>Carregando...</p>
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
