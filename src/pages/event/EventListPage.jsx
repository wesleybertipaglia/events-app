import { ListAll } from '../../components/common/'
import { EventListView } from '../../components/event'

const EventListPage = () => {
    return (
        <ListAll title="Eventos" apiUrl="/events"
            renderItem={(event) => <EventListView event={event} />}
        />
    )
}

export default EventListPage