import { useEffect, useState} from 'react'
import epsilonLogo from '../../assets/images/logo_epsilon.png'
import Nav from './header_content/nav.jsx'
import Credit from './header_content/credit.jsx'
import Action from './header_content/action.jsx'
import './header.css'
import { useNavigate } from 'react-router-dom'



function Header() {

  const navigate = useNavigate()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScrolled = () => {
      setScrolled(window.scrollY > 50)
      
    }
    window.addEventListener('scroll', handleScrolled)
    return () => window.removeEventListener('scroll', handleScrolled)
  }, [])

  
  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div id='default'>

        {/* Le wrapper CSS gère l'animation — plus besoin de conditional render */}
        <div className='credit-wrapper'>
          <Credit />
        </div>

        <div id='navBar'>
          <div className='logo-container' onClick={() => navigate("/")}>
            <img
              src={epsilonLogo}
              className={scrolled ? 'hide' : 'show'}
              alt="logo-epsilon-chimie"
              title="logo-epsilon-chimie"
            />
            <button className={scrolled ? 'show' : 'hide'} onClick={() => navigate("/")}>
              <span>Epsilon Chimie |</span> European Chemicals Manufacturer
            </button>
          </div>
          <Nav />
          <Action />
        </div>

      </div>
    </header>
  )
}

export default Header
