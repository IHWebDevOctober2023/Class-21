
import './App.css'
import Fetching from './components/Fetching'
import { Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

function App() {


  return (
    <>
      <nav>

        <Link to="/" >Home</Link>
        <span> || </span>
        <Link to="/apartments" >Apartments</Link>

      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartments" element={<Fetching />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
