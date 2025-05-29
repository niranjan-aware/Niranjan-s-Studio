import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(),],
  server: {
    host: '0.0.0.0', // <-- this is the key
    port: 5173,       // optional: change if you want
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: [
      'niranjan-s-studio.onrender.com',
      'localhost',
      '127.0.0.1'
    ]
  }
})
