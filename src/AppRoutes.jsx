import { Routes, Route } from 'react-router'
import { ProtectedRoute } from './components/auth'
import { HomePage, NotFoundPage } from './pages'
import { EventListPage, EventDetailsPage } from './pages/event'
import { SignUpPage, SignInPage } from './pages/auth'
import { ProfileDetailsPage, ProfileUpdatePage } from './pages/profile'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />

            <Route path='/eventos' element={<EventListPage />} />
            <Route path='/eventos/:id' element={<EventDetailsPage />} />

            <Route path='/cadastrar' element={<SignUpPage />} />
            <Route path='/entrar' element={<SignInPage />} />

            <Route path='/perfil' element={<ProtectedRoute element={ProfileDetailsPage} />} />
            <Route path='/perfil/editar' element={<ProtectedRoute element={ProfileUpdatePage} />} />
        </Routes>
    )
}

export default AppRoutes