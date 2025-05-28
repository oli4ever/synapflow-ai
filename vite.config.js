import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  "scripts": {
  "build": "node node_modules/vite/bin/vite.js build"
},
})
