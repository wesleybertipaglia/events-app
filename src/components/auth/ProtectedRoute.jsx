import { useAuthContext } from "../../context/AuthProvider"
import { Navigate } from "react-router"
import { Container } from "../layout"

const ProtectedRoute = ({ element: Element }) => {
    const { user, loading } = useAuthContext()

    if (loading) {
        return (
            <Container classList="py-5">
                <p>Carregando</p>
            </Container>
        )
    }

    return user ? <Element /> : <Navigate to="/entrar" />
}

export default ProtectedRoute