import Container from './Container'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <Container classList={"py-5 border-bottom bg-light"}>
            <div className="row align-items-center">
                <div className="col-12 col-md-8">
                    <h1>Descubra e Participe dos Melhores Eventos ao Redor do Mundo!</h1>
                    <p>
                        Encontre eventos que se encaixam no seu interesse, crie o seu próprio e compartilhe experiências inesquecíveis.
                    </p>

                    <div className="d-flex gap-3">
                        <Link to="/eventos">
                            <button className="btn btn-primary">
                                Descubra
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <img
                        src="https://images.unsplash.com/photo-1671037877105-9af332b937e1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Evento de destaque" className="w-100 object-fit-cover rounded-4" style={{ aspectRatio: "1/1" }} />
                </div>
            </div>
        </Container>
    )
}

export default Hero