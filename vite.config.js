import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This proxies requests starting with /api to the target domain
      '/api': {
        target: 'https://sridiya.com',
        changeOrigin: true,
        secure: false,
        // Optional: rewrite the URL if needed
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
