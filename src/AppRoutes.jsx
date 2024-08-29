import { Routes, Route } from 'react-router'

import { HomePage, NotFoundPage } from './pages'
import { EventListPage } from './pages/event'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />

            <Route path='/eventos' element={<EventListPage />} />
        </Routes>
    )
}

export default AppRoutes