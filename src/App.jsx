import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Prices from './Prices.jsx'
import Office from './Office.jsx'
import NotFound from './NotFound.jsx'

export default function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  useEffect(()=>{
    document.querySelector('.App').className = `App ${theme}`
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/office' element={<Office />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
