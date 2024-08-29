import { Routes, Route } from 'react-router'

import { HomePage, NotFoundPage } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes