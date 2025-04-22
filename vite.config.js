import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/front-end-simplon-carambar/', // Ajoutez cette ligne
  build: {
    outDir: 'dist'
  }
})

