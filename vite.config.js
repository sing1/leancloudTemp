import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // 使用相对路径，便于直接用文件系统打开 dist/index.html
  base: './',
  plugins: [vue()],
})
