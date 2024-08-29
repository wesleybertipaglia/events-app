import { Container, Hero } from '../components/layout'
import { ListGrid } from '../components/common'
import { EventListView } from '../components/event'

const HomePage = () => {
    return (
        <>
            <Hero />

            <Container classList="py-5">
                <ListGrid title="Eventos Recentes" linkToAll="/eventos" apiUrl="/events?page=0&size=4"
                    renderItem={(event) =>
                        <div className='col-6 col-md-3' key={event.id}>
                            <EventListView event={event} />
                        </div>
                    }
                />
            </Container>
        </>
    )
}

export default HomePage