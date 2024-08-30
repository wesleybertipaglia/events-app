import { Navigate, useParams } from 'react-router'
import { useFetch } from '../../hooks'
import { EventUpdateForm } from '../../components/event'
import { Container } from '../../components/layout'

const EventUpdatePage = () => {
    const { id } = useParams()
    const { data: event, loading: loadingEvent } = useFetch(`/events/${id}`)
    const { data: isOwner, loading: loadingOwner } = useFetch(`/events/${id}/is-owner`)

    if (loadingEvent || loadingOwner) {
        return (
            <Container classList="py-5">
                <p>Carregando...</p>
            </Container>
        )
    }

    if (!loadingOwner && !isOwner) {
        return <Navigate to="/" />
    }

    return event ? (
        <EventUpdateForm event={event} />
    ) : (
        <Container classList="py-5">
            <p>Evento não encontrado</p>
        </Container>
    )
}

export default EventUpdatePage