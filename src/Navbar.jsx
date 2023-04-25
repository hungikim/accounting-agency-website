import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export default function Navbar(){
    const navScrollToTop = e => {
        console.log('listener')
        if (e.target.matches('.Navbar a')) window.scrollTo(0,0)
    }
    return (
        <header>
            <nav className='Navbar' onClick={navScrollToTop}>
                <div className='logo'>
                    <NavLink to='/'>그린세무법인</NavLink>
                </div>
                <ul className='navbar-center'>
                    <li className="nav-item">
                        <NavLink to='/'>홈</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/office'>오시는길</NavLink>
                    </li>
                </ul>
                <ul className='navbar-right'>
                    <li className="nav-item">
                        <NavLink>Item1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink>Item2</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}