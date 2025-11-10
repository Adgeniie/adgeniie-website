import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // 👈 Expose to your local network
    port: 5173,   // 👈 You can change if 5173 is busy
  },
})
