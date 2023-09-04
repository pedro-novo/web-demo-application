import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@modules', replacement: path.resolve(__dirname, './src/modules') },
      { find: '@router', replacement: path.resolve(__dirname, './src/router') },
      { find: '@setup', replacement: path.resolve(__dirname, './src/setup') },
      { find: '@common', replacement: path.resolve(__dirname, './src/modules/common') },
      { find: '@store', replacement: path.resolve(__dirname, './src/store') },
    ],
  },
});
