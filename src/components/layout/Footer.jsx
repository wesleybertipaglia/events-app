import Container from './Container'

const Footer = () => {
    return (
        <footer>
            <Container classList={"py-3 border-top"}>
                <div className="text-center">
                    <p>&copy; 2024. Todos os direitos reservados</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer