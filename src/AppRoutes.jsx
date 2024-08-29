import { Routes, Route } from 'react-router'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={"Página inicial"} />
            <Route path='*' element={"Página não encontrada"} />
        </Routes>
    )
}

export default AppRoutes