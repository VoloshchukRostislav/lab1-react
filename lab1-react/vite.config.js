import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lab1-react/', // Переконайтеся, що тут назва репозиторію з косою рисками
})