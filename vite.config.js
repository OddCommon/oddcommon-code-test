import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactSvgPlugin()],
  root: './src/',
  build: {
    outDir: `${path.resolve(__dirname, './dist')}`,
    emptyOutDir: true,
  },
  server: {
    host: true,
  },
  resolve: {
    alias: {},
  },
});
