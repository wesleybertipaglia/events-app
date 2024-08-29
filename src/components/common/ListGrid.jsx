import { useFetch } from '../../hooks'

import { Link } from 'react-router-dom'
import { Container } from '../layout'

const ListGrid = ({ title, linkToAll, apiUrl, renderItem }) => {
    const { data, loading } = useFetch(apiUrl)

    if (loading) return (
        <Container classList="py-5">
            <p>Carregando...</p>
        </Container>
    )

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h4>{title}</h4>
                <Link to={linkToAll}>Ver todos</Link>
            </div>

            {
                data.content.length > 0 ? (
                    <div className="row">
                        {data.content.map(item => (
                            renderItem(item)
                        ))}
                    </div>
                ) : (
                    <p>Nenhum resultado encontrado</p>
                )
            }
        </>
    )
}

export default ListGrid