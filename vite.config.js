import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('gsap')) return 'gsap-vendor';
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 2000, // Optional: increase warning limit
  },
});
