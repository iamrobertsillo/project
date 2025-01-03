import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'terser', // Use 'terser' to minify JavaScript
    terserOptions: {
      compress: {
        drop_console: true, // Optionally remove console logs
      },
    },
  },
});