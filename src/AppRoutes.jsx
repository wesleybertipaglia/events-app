import { Routes, Route } from 'react-router'
import { ProtectedRoute } from './components/auth'
import { HomePage, NotFoundPage } from './pages'
import { EventDetailsPage, EventListPage, EventCreatePage, EventUpdatePage } from './pages/event'
import { SignUpPage, SignInPage } from './pages/auth'
import { ProfileDetailsPage, ProfileUpdatePage, ProfileEventListPage, ProfileAttendListPage } from './pages/profile'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />

            <Route path='/eventos' element={<EventListPage />} />
            <Route path='/eventos/:id' element={<EventDetailsPage />} />
            <Route path='/eventos/novo' element={<ProtectedRoute element={EventCreatePage} />} />
            <Route path='/eventos/:id/editar' element={<ProtectedRoute element={EventUpdatePage} />} />

            <Route path='/cadastrar' element={<SignUpPage />} />
            <Route path='/entrar' element={<SignInPage />} />

            <Route path='/perfil' element={<ProtectedRoute element={ProfileDetailsPage} />} />
            <Route path='/perfil/editar' element={<ProtectedRoute element={ProfileUpdatePage} />} />
            <Route path='/perfil/eventos' element={<ProtectedRoute element={ProfileEventListPage} />} />
            <Route path='/perfil/participacoes' element={<ProtectedRoute element={ProfileAttendListPage} />} />
        </Routes>
    )
}

export default AppRoutes