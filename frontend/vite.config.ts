import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite acceso desde cualquier IP
    port: 5173,
    allowedHosts: [
      'all', // Permite todos los hosts
      'f187-190-26-151-162.ngrok-free.app' // Añade el host específico de Ngrok
    ],
  }
})
