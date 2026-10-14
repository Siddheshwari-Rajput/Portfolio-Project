import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the built site work on GitHub Pages (project sites) and Netlify.
export default defineConfig({
  plugins: [react()],
  base: './',
})
