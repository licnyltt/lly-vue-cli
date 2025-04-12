import type { App } from 'vue';

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