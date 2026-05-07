import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import js from '@eslint/js'

export default defineConfig({
  base: '/epsilon-chimie-official/',
  plugins: [react(),tailwindcss(),js()],
})
