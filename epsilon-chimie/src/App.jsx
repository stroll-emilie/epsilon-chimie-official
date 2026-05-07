import { useState } from 'react'

import './styles/App.css'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Home from './pages/home/home.jsx'

function App() {
  return (
    <>
      <Header />

      <Home />
      <Footer />
    </>
  )
}

export default App
