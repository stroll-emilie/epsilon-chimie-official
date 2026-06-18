import '../header.css'
import { useLocation, NavLink } from 'react-router-dom'
function Nav() {

    const location = useLocation();

    return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/catalogue">Catalogue</NavLink></li>
            <li><NavLink to="/custom">Custom Synthesis</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>

    )
}

export default Nav
