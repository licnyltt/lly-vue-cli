import { defineConfig } from 'vite'


export default defineConfig({
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'useResize',
      },
      rollupOptions: {
        // 你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖
          // 提供一个全局变量
          globals: {
            useResize: 'useResize', //umd(require('xxx'); <script src='xxx/xx.js' />): amd cmd cjs; esm(import 'xxx' from 'xxx')
          },
        },
      },
    },
  })