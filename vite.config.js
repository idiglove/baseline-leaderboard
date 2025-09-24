import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  rollupOptions: {
    input: './index.html'
  },
  server: {
    port: 3000,
    host: true
  }
})