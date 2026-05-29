import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import { ProductProvider } from './context/AppContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

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
          <ScrollToTop/>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogue' element={<Catalogue />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/about' element={<About />} />
            <Route path='/custom' element={<Custom />} />
          </Routes>
          <Footer />
        </ProductProvider>
      </main>
  )
}

export default App
