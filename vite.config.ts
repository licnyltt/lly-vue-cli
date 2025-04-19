import { defineConfig } from 'vite'


export default defineConfig({
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'useResize',
        formats: ['es', 'umd'],
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  })