import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  rollupOptions: {
    input: resolve(__dirname, 'index.html')
  },
  server: {
    port: 3000,
    host: true
  }
})