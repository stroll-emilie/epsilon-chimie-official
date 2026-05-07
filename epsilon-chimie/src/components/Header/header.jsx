import { useEffect, useState} from 'react'
import { SearchIcon } from '../../assets/icons/search_icon'
import epsilonLogo from '../../assets/images/logo_epsilon.png'
import Nav from './header_content/nav.jsx'
import Credit from './header_content/credit.jsx'
import Action from './header_content/action.jsx'
import './header.css'




function Header() {



  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScrolled = () => {
      setScrolled(window.scrollY > 100)
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
          <div className='logo-container'>
            <img
              src={epsilonLogo}
              className={scrolled ? 'hide' : 'show'}
            />
            <p className={scrolled ? 'show' : 'hide'}>
              <span>Epsilon Chimie |</span> European Chemicals Manufacturer
            </p>
          </div>
          <Nav />
          <Action />
        </div>

      </div>
    </header>
  )
}

export default Header
