import { Link } from 'react-router-dom'
import { Container } from '../components/layout'

const NotFoundPage = () => {
    return (
        <Container classList={"py-5"}>
            <h1>404 - Página não encontrada</h1>
            <p>
                A página que você está tentando acessar não existe.
                Por favor, volte para a <Link to="/">página inicial</Link>.
            </p>
        </Container>
    )
}

export default NotFoundPage