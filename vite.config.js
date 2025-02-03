import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'Kpmpp.com' // Your GitHub repository name

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // Set base path for GitHub Pages
  build: {
    outDir: 'dist', // Default build directory
  },
})
