import { Routes, Route } from 'react-router'

import { HomePage, NotFoundPage } from './pages'
import { EventListPage, EventDetailsPage } from './pages/event'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />

            <Route path='/eventos' element={<EventListPage />} />
            <Route path='/eventos/:id' element={<EventDetailsPage />} />
        </Routes>
    )
}

export default AppRoutes