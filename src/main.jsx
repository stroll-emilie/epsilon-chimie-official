import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from './config/emailjs.js'
emailjs.init(EMAILJS_CONFIG.publicKey)

import App from './App.jsx'
import './styles/globals.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
