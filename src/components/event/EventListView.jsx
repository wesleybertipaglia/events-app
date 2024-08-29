import { Link } from 'react-router-dom'

const EventListView = ({ event }) => {
    const { id, title, description, image } = event

    return (
        <Link to={"/eventos/" + id} className='text-reset text-decoration-none d-block mb-4 card'>
            <div className='card-body'>
                <img src={image} alt={title} className="w-100 h-100 rounded mb-3 d-block bg-light object-fit-cover" style={{ aspectRatio: "16/9" }} />
                <p className='m-0'><strong>{title}</strong></p>
                <p className='m-0'>
                    {description.substring(0, 80) + (description.length > 80 ? '...' : '')}
                </p>
            </div>
        </Link>
    )
}

export default EventListView