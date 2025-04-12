import type { App } from 'vue'

// ResizeObserver
// MutationObserver
// IntersectionObserver
// 自定义指令
function useResize(el: HTMLElement, cb: Function){
    let resize = new ResizeObserver(entries => {
        console.log('entries', entries)
        cb(entries[0].contentRect);
    });

    resize.observe(el);
}

// 支持app.use()
// <div> v-resize="() => {}"></div>
const install = (app: App) => {
    app.directive('resize', {
        // 挂载阶段
        mounted(el, binding) {
            useResize(el, binding.value);
        }
    });
}

useResize.install = install;

export default useResize;
