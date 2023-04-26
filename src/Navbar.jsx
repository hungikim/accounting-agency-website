import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar({ toggleTheme, theme }){

    const navScrollToTop = e => {
        console.log('listener')
        if (e.target.matches('.Navbar a')) window.scrollTo(0,0)
    }

    return (
        <header className={theme}>
            <nav className='Navbar' onClick={navScrollToTop}>
                <div className='logo'>그린세무법인</div>
                <ul className='navbar-center'>
                    <li className='nav-item'>
                        <NavLink to='/info'>홈</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/'>서비스</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/prices'>요금안내</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/office'>오시는길</NavLink>
                    </li>
                </ul>
                <ul className='navbar-right'>
                    <li className="nav-item">
                        <button className='darkmode-btn' onClick={toggleTheme}>다크모드</button>
                    </li>

                </ul>
            </nav>
        </header>
    )
}