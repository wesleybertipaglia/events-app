import { ListAll } from "../../components/common"
import { EventListView } from "../../components/event"

const ProfileEventListPage = () => {
    return (
        <ListAll
            apiUrl="/profile/events"
            title="Seus Eventos"
            renderItem={(event) => <EventListView event={event} />}
        />
    )
}

export default ProfileEventListPage