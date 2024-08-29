import { Routes, Route } from 'react-router'
import { HomePage, NotFoundPage } from './pages'
import { EventListPage, EventDetailsPage } from './pages/event'
import { SignUpPage, SignInPage } from './pages/auth'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />

            <Route path='/eventos' element={<EventListPage />} />
            <Route path='/eventos/:id' element={<EventDetailsPage />} />

            <Route path='/cadastrar' element={<SignUpPage />} />
            <Route path='/entrar' element={<SignInPage />} />
        </Routes>
    )
}

export default AppRoutes