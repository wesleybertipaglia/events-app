import { ListAll } from "../../components/common"
import { EventListView } from "../../components/event"

const ProfileAttendListPage = () => {
    return (
        <ListAll
            apiUrl="/profile/attendances"
            title="Suas Participações"
            renderItem={(event) => <EventListView event={event} />}
        />
    )
}

export default ProfileAttendListPage