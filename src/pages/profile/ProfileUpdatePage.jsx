import { useAuthContext } from '../../context/AuthContext'

import { ProfileUpdateForm } from '../../components/profile'

const ProfileUpdatePage = () => {
    const { user } = useAuthContext()

    return (
        <ProfileUpdateForm user={user} />
    )
}

export default ProfileUpdatePage