import { useState } from 'react'
import epsilonLogo from '../../assets/images/logo_epsilon.png'
import './header.css'

function Header() {
  return (
    <>
      <header>
        <div id='credits'>
          <p>EUROPEANS CHEMICALS MANUFACTURER</p>
          <p>BREST, FRANCE</p>
          <p>SINCE 1995</p>
        </div>
        <div id="navigation">
          <img src={epsilonLogo}/>

          <nav>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Catalogue</a></li>
              <li><a href="">Custom Synthesis</a></li>
              <li><a href="">About</a></li>
            </ul>
          </nav>

          <div id='action'>
            <div>
               {/*TODO: Refaire la barre de recherche en fonction de ce qu'elle fera dans le futur quand ça arrivera */}
              <p>Search Catalogue</p>
              {/* icon loupe à voir ou la trouver*/}
            </div>
            <a href="">Request a quote</a>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header
