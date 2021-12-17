import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/device-configurator/',
  publicDir: 'demo',
  build: {
    outDir: 'docs/',
    emptyOutDir: true,
  }
})
