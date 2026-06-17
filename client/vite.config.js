import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/books': {
        target: 'http://localhost:3001'
      }
    }
  }
})