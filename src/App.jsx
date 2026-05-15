import './styles/App.css'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Home from './pages/home/home.jsx'
import About from './pages/about/about.jsx'

function App() {
  return (
    <main>
      <Header />
      <About />
      <Footer />
    </main>
  )
}

export default App
