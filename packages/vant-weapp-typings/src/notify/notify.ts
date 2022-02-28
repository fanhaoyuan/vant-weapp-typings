export interface VantNotifyOptions {
    /**
     * 类型
     *
     * @version `v1.0.0`
     *
     * @default 'danger'
     */
    type?: 'primary' | 'success' | 'warning' | 'danger';

    /**
     * 展示文案，支持通过`\n`换行
     *
     * @version `v1.0.0`
     *
     * @default ''
     */
    message?: string;

    /**
     * 展示时长(ms)，值为 `0` 时，`notify` 不会消失
     *
     * @default 3000
     */
    duration?: number;

    /**
     * 自定义节点选择器
     *
     * @default 'van-notify'
     */
    selector?: string;

    /**
     * 字体颜色
     *
     * @default '#fff'
     */
    color?: string;

    /**
     * 顶部距离
     *
     * @default 0
     */
    top?: number;

    /**
     * 背景颜色
     */
    background?: string;

    /**
     * 选择器的选择范围，可以传入自定义组件的 `this` 作为上下文
     *
     * @default 当前页面
     */
    context?: WechatMiniprogram.Page.GetCurrentPages;

    /**
     * 点击时的回调函数
     */
    onClick?: Function;

    /**
     * 完全展示后的回调函数
     */
    onOpened?: Function;

    /**
     * 关闭时的回调函数
     */
    onClose?: Function;

    /**
     * 是否留出顶部安全距离（状态栏高度）
     *
     * @default false
     */
    safeAreaInsetTop?: boolean;
}

export interface VantNotify {
    /**
     * 展示提示
     */
    (): (message: string) => void;
    (): (options: VantNotifyOptions) => void;

    /**
     * 关闭提示
     */
    clear: () => void;
}
