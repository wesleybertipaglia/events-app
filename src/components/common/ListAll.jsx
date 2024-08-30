import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks'
import { Container } from '../layout'
import { Link } from 'react-router-dom'

const ListAll = ({ apiUrl, title, renderItem }) => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') || ''
    const page = parseInt(searchParams.get('page') || 0)
    const size = searchParams.get('size') || '12'

    const { data, loading } = useFetch(`${apiUrl}?query=${query}&size=${size}&page=${page}`)

    if (loading) return (
        <Container classList="py-5">
            <p>Carregando...</p>
        </Container>
    )

    return (
        <Container classList={"py-5"}>
            <div className="d-flex justify-content-between">
                <h2>{query.length > 0 ? `Mostrando resultados para: ${query}` : title}</h2>
                <p>{data?.totalElements} resultados encontrados</p>
            </div>

            <div className="row">
                {data?.content.length > 0 ? (
                    data?.content.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-3" key={index}>
                            {renderItem(item)}
                        </div>
                    ))
                ) : (
                    <p>Nenhum resultado encontrado</p>
                )}
            </div>

            <div className="d-flex justify-content-between mt-4">
                <button
                    className="btn btn-primary"
                    disabled={page === 0}
                >
                    <Link to={`?query=${query}&page=${page - 1}&size=${size}`}
                        className='text-reset text-decoration-none'>Página Anterior</Link>
                </button>
                <span>Página {page + 1} / {data?.totalPages}</span>
                <button
                    className="btn btn-primary"
                    disabled={page + 1 == data?.totalPages}
                >
                    <Link to={`?query=${query}&page=${page + 1}&size=${size}`}
                        className='text-reset text-decoration-none'>Próxima Página</Link>
                </button>
            </div>
        </Container>
    )
}

export default ListAll