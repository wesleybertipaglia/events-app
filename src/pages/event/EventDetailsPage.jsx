import { useParams } from 'react-router'
import { useFetch } from '../../hooks'
import { EventDetailsView } from '../../components/event'
import { Container } from '../../components/layout'

const EventDetailsPage = () => {
    const { id } = useParams()
    const { data: event, loading } = useFetch(`/events/${id}`)

    if (loading) {
        return (
            <Container classList="py-5">
                <p>Carregando...</p>
            </Container>
        )
    }

    return (
        <EventDetailsView event={event} />
    )
}

export default EventDetailsPage