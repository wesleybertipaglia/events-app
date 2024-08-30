import { useAuthContext } from '../../context/AuthContext'
import Container from './Container'
import { Avatar } from '../common'
import { Link } from 'react-router-dom'

const Header = () => {
    const { user, signOut } = useAuthContext()

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
                        {user ? (
                            <div className="btn-group">
                                <button className="d-flex gap-2 align-items-center btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Avatar src={user.image} alt={user.name} size="2rem" />
                                    <span>Bem-vindo, {user.name}!</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to="/perfil" className="dropdown-item" >Perfil</Link></li>
                                    <li><Link to="/eventos/novo" className="dropdown-item" >Novo Evento</Link></li>
                                    <li><Link className="dropdown-item" onClick={signOut}>Sair</Link></li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link to="/entrar">
                                    <button className="btn">Entrar</button>
                                </Link>

                                <Link to="/cadastrar">
                                    <button className="btn btn-primary">Cadastrar</button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header