declare const useResize: {
    (el: HTMLElement, cb: Function): void;
    install: (app: App) => void;
}

export default useResize;