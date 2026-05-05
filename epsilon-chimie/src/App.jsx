import { useState } from 'react'

import './styles/App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
