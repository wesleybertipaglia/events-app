import { useEffect, useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import useFetch from './useFetch'

const useIsOwner = (ownerLink) => {
    const { user, loading: loadingUser } = useAuthContext()
    const { data: owner, loading: loadingOwner } = useFetch(ownerLink)
    const [isOwner, setIsOwner] = useState(false)

    useEffect(() => {
        if (!loadingUser && !loadingOwner && owner != null && user != null) {
            setIsOwner(user.id === owner.id)
        }
    }, [owner, user, loading])

    return { owner, isOwner, loading }
}

export default useIsOwner
