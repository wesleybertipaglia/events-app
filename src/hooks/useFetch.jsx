import { useState, useEffect } from 'react'
import useApi from './useApi'

const useFetch = (apiUrl) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const api = useApi()

    const fetchData = async () => {
        if (apiUrl) {
            try {
                const response = await api.get(apiUrl)
                setData(response.data)
            } catch (error) {
                console.error("Ocorreu um erro: ", error)
            }
        }

        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [apiUrl])

    return { data, loading }
}

export default useFetch