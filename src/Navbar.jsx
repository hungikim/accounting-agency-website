import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return (
        <header>
            <nav className='Navbar'>
                <div className='logo'>
                    <Link to='/'>그린세무법인</Link>
                </div>
                <ul className='navbar-center'>
                    <li className="nav-item">항목1</li>
                    <li className="nav-item">항문2</li>
                <li className="nav-item"><Link to='/office'>오시는길</Link></li>
                </ul>
                <div className='navbar-right'>
                    <div className="nav-item">Item1</div>
                    <div className="nav-item">Item2</div>
                </div>
            </nav>
        </header>
    )
}