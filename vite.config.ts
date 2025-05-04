import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-daily-tracker/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});