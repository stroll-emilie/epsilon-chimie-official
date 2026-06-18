import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 


export default defineConfig({
  // FIXME: mettre '/' pour l'envoie en prod
  base: '/',
  plugins: [react(),tailwindcss()],
})

