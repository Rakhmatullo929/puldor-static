import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Для SPA роутинга
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})

