import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import epsilonLogo from './assets/logo_epsilon.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
              <p>Search Catalogue</p>
              {/* icon loupe */}
            </div>
            <a href="">Request a quote</a>
          </div>

        </div>
      </header>
    </>
  )
}

export default App
