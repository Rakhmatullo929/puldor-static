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
  // Добавляем поддержку MP4 файлов как ассетов
  assetsInclude: ['**/*.MP4', '**/*.mp4'],
})

