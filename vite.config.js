import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://voolga.github.io/mindbender_quiz/',
  plugins: [react()]
})
