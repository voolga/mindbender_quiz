import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mindbender_quiz/',
  plugins: [react()]
})
