import { Container } from '../layout'
import EventActions from './EventActions'

const EventDetailsView = ({ event, isOwner, isAttending }) => {
    const { id, title, description, image, date, location } = event

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            weekday: 'long',
            timeZone: 'UTC'
        }).format(date)
    }

    return (
        <Container classList="py-5">
            <figure>
                <img
                    src={image}
                    alt={title}
                    className="d-block object-fit-cover w-100 bg-light rounded-3"
                    style={{ height: "400px" }}
                />
            </figure>
            <div className='d-flex flex-column gap-4'>
                <div className='border-bottom pb-3'>
                    <div className=''>
                        <h2 className='font-bold'>{title}</h2>
                        <p className='m-0'>🗓️ {formatDate(new Date(date))}</p>
                        <p className='m-0'>📍 {location}</p>
                    </div>
                </div>

                <div>
                    <h4>Sobre</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
                </div>

                <EventActions eventId={id} isOwner={isOwner} isAttendingFirst={isAttending} />
            </div>
        </Container>
    )
}

export default EventDetailsView