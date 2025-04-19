import type { App } from 'vue';

// 扩展全局类型声明
declare module 'lly-vue-hooks' {
  interface ResizeObserverCallback {
    (rect: DOMRectReadOnly): void;
  }

  interface UseResizeWithInstall {
    (el: HTMLElement, cb: ResizeObserverCallback): void;
    install: (app: App) => void;
  }

  // 默认导出
  const useResize: UseResizeWithInstall;
  export default useResize;
}