import { useParams } from 'react-router'
import { useFetch } from '../../hooks'
import { EventDetailsView } from '../../components/event'
import { Container } from '../../components/layout'

const EventDetailsPage = () => {
    const { id } = useParams()
    const { data: event, loading: loadingEvent } = useFetch(`/events/${id}`)
    const { data: isOwner, loading: loadingOwner } = useFetch(`/events/${id}/is-owner`)
    const { data: isAttending, loading: loadingIsAttending } = useFetch(`/events/${id}/is-attending`)

    if (loadingEvent || loadingOwner || loadingIsAttending) {
        return (
            <Container classList="py-5">
                <p>Carregando...</p>
            </Container>
        )
    }

    return event ? (
        <EventDetailsView event={event} isOwner={isOwner} isAttending={isAttending} />
    ) : (
        <Container classList="py-5">
            <p>Evento não encontrado</p>
        </Container>
    )
}

export default EventDetailsPage