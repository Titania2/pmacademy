import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.json'],   // ✅ Make sure JSON is treated as a static asset
  esbuild: {
    loader: 'json',              // ✅ This line tells Vite to load .json files properly
    include: /\.json$/           // ✅ Optional: applies loader only to .json files
  }
});
