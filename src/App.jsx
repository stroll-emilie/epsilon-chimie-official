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
import Error404 from './pages/error/error404.jsx'
import Request from './pages/request/request.jsx'
import PrivacyPolicy from './pages/legal/privacy_policy.jsx'
import GeneralTC from './pages/legal/general_tc.jsx'
import LegalNotice from './pages/legal/legal_notice.jsx'
import GeneralTerms from './pages/legal/general_terms.jsx'
import Success from './pages/request/components/success.jsx'
import RequestError from './pages/request/components/error.jsx'

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

            <Route path='/request-for-quote' element={<Request />} />
            <Route path='/request-for-quote/:id' element={<Request />} />

            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/general-t&c' element={<GeneralTC />} />
            <Route path='/legal-notice' element={<LegalNotice />} />
            <Route path='/general-terms' element={<GeneralTerms />} />

            <Route path='/success' element={<Success />} />
            <Route path='/error' element={<RequestError />} />

            <Route path='/error404' element={<Error404 />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
          <Footer />
        </ProductProvider>
      </main>
  )
}

export default App
