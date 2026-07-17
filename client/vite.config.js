import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import ViteRestart from 'vite-plugin-restart';

// https://vite.dev/config/
export default defineConfig({
  server:{
    host:true,
    watch:{
      usePolling: true
    }
  },

  plugins: [tailwindcss(),react()],
})
