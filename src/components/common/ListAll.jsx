import { useNavigate, useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks'
import { Container } from '../layout'

const ListAll = ({ apiUrl, title, renderItem }) => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') || ''
    const page = parseInt(searchParams.get('page') || 0)
    const size = searchParams.get('size') || '12'
    const navigate = useNavigate()

    const { data, loading } = useFetch(`${apiUrl}?query=${query}&size=${size}&page=${page}`)

    if (loading) return (
        <Container classList="py-5">
            <p>Carregando...</p>
        </Container>
    )

    const prevPage = () => {
        navigate(`?query=${query}&page=${page - 1}&size=${size}`)
    }

    const nextPage = () => {
        navigate(`?query=${query}&page=${page + 1}&size=${size}`)
    }

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
                <button className="btn btn-primary" disabled={page === 0} onClick={prevPage} >
                    Página Anterior
                </button>

                <span>Página {page + 1} / {data?.totalPages}</span>

                <button className="btn btn-primary" disabled={page + 1 >= data?.totalPages} onClick={nextPage}>
                    Próxima Página
                </button>
            </div>
        </Container>
    )
}

export default ListAll