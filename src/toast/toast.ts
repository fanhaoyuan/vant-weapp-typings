export interface VantToastOptions {
    /**
     * 提示类型
     *
     * @default 'text'
     */
    type?: 'loading' | 'success' | 'fail' | 'html' | 'text';
    /**
     * 位置
     *
     * @default 'middle'
     */
    position?: 'top' | 'middle' | 'bottom';
    /**
     * 内容
     *
     * @default ''
     */
    message?: string;
    /**
     * 是否显示遮罩层
     *
     * @default false
     */
    mask?: boolean;
    /**
     * 是否禁止背景点击
     *
     * @default false
     */
    forbidClick?: boolean;
    /**
     * 加载图标类型
     *
     * @default 'circular'
     */
    loadingType?: 'spinner' | 'circular';
    /**
     * `z-index` 层级
     *
     * @default 1000
     */
    zIndex?: number;
    /**
     * 展示时长(ms)，值为 `0` 时，`toast` 不会消失
     *
     * @default 2000
     */
    duration?: number;
    /**
     * 自定义选择器
     *
     * @default 'van-toast'
     */
    selector?: string;
    /**
     * 选择器的选择范围，可以传入自定义组件的 `this` 作为上下文
     *
     * @default 当前页面
     */
    context?: object;
    /**
     * 关闭时的回调函数
     */
    onClose?: Function;
}

export declare function VantToast(message: string): void;
export declare function VantToast(option: VantToastOptions): void;
export declare class VantToast {
    /**
     * 展示加载提示
     */
    static loading(message: string): void;

    static loading(options: VantToastOptions): void;

    /**
     * 展示成功提示
     */
    static success(message: string): void;

    static success(options: VantToastOptions): void;

    /**
     * 展示失败提示
     */
    static fail(message: string): void;

    static fail(options: VantToastOptions): void;

    /**
     * 关闭提示
     */
    static clear(): void;

    /**
     * 修改默认配置，对所有 Toast 生效
     */
    static setDefaultOptions(options: VantToastOptions): void;

    /**
     * 重置默认配置，对所有 Toast 生效
     */
    static resetDefaultOptions(): void;
}
