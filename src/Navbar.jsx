import './Navbar.css'
import { NavLink } from 'react-router-dom'
import sunIcon from './assets/sun.svg'
export default function Navbar({ toggleTheme, theme }){

    const navScrollToTop = e => {
        if (e.target.matches('.Navbar a')) window.scrollTo(0,0)
    }

    return (
        <header className={theme}>
            <nav className='Navbar' onClick={navScrollToTop}>
                <div className='logo'>그린세무법인</div>
                <ul className='navbar-center'>
                    <li className='nav-item'>
                        <NavLink to='/'>홈</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/services'>서비스</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/prices'>비용안내</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/office'>오시는길</NavLink>
                    </li>
                </ul>
                <ul className='navbar-right'>
                    <li className="nav-item">
                        <button className='darkmode-btn' onClick={toggleTheme} title='다크 모드로 전환'>
                            <img src={sunIcon} />
                        </button>
                    </li>
                </ul>
                <div className='navbar-break'></div>
            </nav>
        </header>
    )
}