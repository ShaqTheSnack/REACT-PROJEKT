import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  cacheDir: '.vite-cache',
  plugins: [react()],
  server: { host: '127.0.0.1', strictPort: false },
})
