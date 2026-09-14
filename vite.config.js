import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // relative paths so the same build works both at a repo subpath
  // (akhil-ig.github.io/akhilesh-portfolio/) and at a domain root
  base: './',
  plugins: [react(), tailwindcss()],
})
