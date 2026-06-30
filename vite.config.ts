import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Set base to the repo name when deploying to GitHub Pages.
// Override at build time with VITE_BASE, e.g. `VITE_BASE=/dwelling/ npm run build`.
const base = process.env.VITE_BASE ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
