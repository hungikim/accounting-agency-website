import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Office from './Office.jsx'
import NotFound from './NotFound.jsx'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/office' element={<Office />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
