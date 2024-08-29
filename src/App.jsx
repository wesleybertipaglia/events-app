import AppRoutes from './AppRoutes'
import { Header, Footer } from './components/layout'

function App() {
  return (
    <div className='d-flex flex-column justify-content-between'
      style={{ minHeight: "100dvh" }}>
      <Header />

      <main style={{ flex: "1" }}>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  )
}

export default App