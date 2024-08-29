import Container from './Container'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="sticky-top bg-white">
            <Container classList={"py-3 border-bottom"}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-4">
                        <Link to="/" className="nav-item">Inicio</Link>

                        <form action="/eventos" method="get" className="input-group">
                            <input type="search" name="query" placeholder="Buscar..." className="form-control" />
                            <button className="input-group-text" type="submit">Buscar</button>
                        </form>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <Link to="/entrar">
                            <button className="btn">Entrar</button>
                        </Link>

                        <Link to="/cadastrar">
                            <button className="btn btn-primary">Cadastrar</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header