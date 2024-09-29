import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        'favicon.ico': undefined,
      },
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': require('path').join(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
});
