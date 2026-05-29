import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { ProductProvider } from './context/AppContext.jsx'

import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Home from './pages/home/home.jsx'
import About from './pages/about/about.jsx'
import Custom from './pages/custom/custom.jsx'
import Catalogue from './pages/catalogue/catalogue.jsx'
import Product from './pages/product/product.jsx'


function App() {
  return (
    <main>
      <ProductProvider>
        <Header />
        <Routes>
          <Route path='/epsilon-chimie-official/' element={<Home />} />

          <Route path='/epsilon-chimie-official/catalogue' element={<Catalogue />} />
          <Route path='/epsilon-chimie-official/product/:id' element={<Product />} />
          
          <Route path='/epsilon-chimie-official/about' element={<About />} />
          <Route path='/epsilon-chimie-official/custom' element={<Custom />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </main>
  )
}

export default App
