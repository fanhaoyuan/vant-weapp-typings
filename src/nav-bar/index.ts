export interface VantNavBarProps {
    /**
     * 标题
     *
     * @default ''
     */
    title?: string;

    /**
     * 左侧文案
     *
     * @default ''
     */
    'left-text'?: string;

    /**
     * 右侧文案
     *
     * @default ''
     */
    'right-text'?: string;

    /**
     * 是否显示左侧箭头
     *
     * @default false
     */
    'left-arrow'?: boolean;

    /**
     * 是否固定在顶部
     *
     * @default false
     */
    fixed?: boolean;

    /**
     * 固定在顶部时是否开启占位
     *
     * @default false
     */
    placeholder?: boolean;

    /**
     * 是否显示下边框
     *
     * @default true
     */
    border?: boolean;

    /**
     * 元素 `z-index`
     *
     * @default 1
     */
    'z-index'?: number;

    /**
     * 根节点自定义样式
     */
    'custom-style'?: string;

    /**
     * 是否留出顶部安全距离（状态栏高度）
     *
     * @default true
     */
    'safe-area-inset-top'?: boolean;
}

export interface VantNavBarEvents {
    /**
     * 点击左侧按钮时触发
     */
    'bind:click-left'?: WechatMiniprogram.EventCallback;

    /**
     * 点击右侧按钮时触发
     */
    'bind:click-right'?: WechatMiniprogram.EventCallback;
}
