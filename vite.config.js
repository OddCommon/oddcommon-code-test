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
    alias: {
      '@assets': `${path.resolve(__dirname, './src/public')}`,
      '@store': `${path.resolve(__dirname, './src/scripts/store')}`,
      '@data': `${path.resolve(__dirname, './src/scripts/data')}`,
      '@libs': `${path.resolve(__dirname, './src/scripts/libs')}`,
      '@hooks': `${path.resolve(__dirname, './src/scripts/hooks')}`,
      '@views': `${path.resolve(__dirname, './src/scripts/views')}`,
      '@components': `${path.resolve(__dirname, './src/scripts/components')}`,
      '@styles': `${path.resolve(__dirname, './src/styles')}`,
      '@cssUtils': `${path.resolve(__dirname, './src/styles/utils')}`,
    },
  },
});
