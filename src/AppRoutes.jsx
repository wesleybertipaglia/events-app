import { Routes, Route } from 'react-router'

import HomePage from './pages/HomePage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={"Página não encontrada"} />
        </Routes>
    )
}

export default AppRoutes