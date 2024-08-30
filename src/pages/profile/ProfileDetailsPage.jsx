import { useAuthContext } from '../../context/AuthContext'

import { ProfileDetailsView } from '../../components/profile'

const ProfileDetailsPage = () => {
    const { user } = useAuthContext()

    return (
        <ProfileDetailsView user={user} />
    )
}

export default ProfileDetailsPage