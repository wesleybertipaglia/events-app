import { useAuthContext } from '../../context/AuthProvider'
import { Link } from "react-router-dom"
import { Avatar, ListGrid } from "../common"
import { EventListView } from "../event"
import { Container } from "../layout"

const ProfileDetailsView = () => {
    const { user, deleteAccount } = useAuthContext()
    const { name, email, image, links } = user
    const eventsLink = links.find(link => link.rel === "events").href.replace("size=10", "size=4")
    const attendancesLink = links.find(link => link.rel === "attendances").href.replace("size=10", "size=4")

    return (
        <Container classList="py-5">
            <div className='d-flex flex-column gap-4'>
                <div className='border-bottom'>
                    <Avatar src={image} alt={name} size='6rem' />
                    <h1>{name}</h1>
                    <p>{email}</p>

                    <div className='row pb-3'>
                        <Link to="/perfil/editar" className='d-flex col-12 col-md-6'>
                            <button className='btn btn-primary w-100'>Atualizar Perfil</button>
                        </Link>

                        <button className='btn btn-danger col-12 col-md-6' onClick={deleteAccount}>Deletar Conta</button>
                    </div>
                </div>

                <ListGrid title="Eventos" linkToAll={`eventos`} apiUrl={eventsLink}
                    renderItem={(event) => (
                        <div className="col-6 col-md-4 col-lg-3" key={event.id}>
                            <EventListView event={event} />
                        </div>
                    )} />

                <ListGrid title="Participações" linkToAll={`participacoes`} apiUrl={attendancesLink}
                    renderItem={(event) => (
                        <div className="col-6 col-md-4 col-lg-3" key={event.id}>
                            <EventListView event={event} />
                        </div>
                    )} />
            </div>
        </Container>
    )
}

export default ProfileDetailsView