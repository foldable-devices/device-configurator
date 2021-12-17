import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/device-configurator/',
  build: {
    outDir: 'docs/',
    emptyOutDir: true,
  }
})
