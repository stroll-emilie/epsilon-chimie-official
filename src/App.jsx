import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Home from './pages/home/home.jsx'
import About from './pages/about/about.jsx'
import Custom from './pages/custom/custom.jsx'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/epsilon-chimie-official/' element={<Home />} />
        <Route path='/epsilon-chimie-official/about' element={<About />} />
        <Route path='/epsilon-chimie-official/custom' element={<Custom />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
