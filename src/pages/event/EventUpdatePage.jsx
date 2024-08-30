import { Navigate, useParams } from 'react-router'
import { useFetch, useIsOwner } from '../../hooks'
import { EventUpdateForm } from '../../components/event'
import { Container } from '../../components/layout'

const EventUpdatePage = () => {
    const { id } = useParams()
    const { data: event, loading: loadingEvent } = useFetch(`/events/${id}`)

    if (loadingEvent) {
        return (
            <Container classList="py-5">
                <p>Carregando...</p>
            </Container>
        )
    }

    const ownerLink = event.links.find((link) => link.rel === "owner")
    const { owner, isOwner, loading } = useIsOwner(ownerLink)

    if (!loading && owner && !isOwner) {
        <Navigate to="/" />
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