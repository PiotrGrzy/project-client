import react from '@vitejs/plugin-react';
import { setDefaultResultOrder } from 'dns';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
  server: {
    port: 3000,
  },
});
