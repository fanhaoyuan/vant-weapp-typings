export interface VantTransitionProps {
    /**
     * 动画类型
     *
     * `fade` 淡入
     *
     * `fade-up` 上滑淡入
     *
     * `fade-down` 下滑淡入
     *
     * `fade-left` 左滑淡入
     *
     * `fade-right` 右滑淡入
     *
     * `slide-up` 上滑进入
     *
     * `slide-down`	下滑进入
     *
     * `slide-left`	左滑进入
     *
     * `slide-right` 右滑进入
     *
     * @default 'fade'
     */
    name?:
        | 'fade'
        | 'fade-up'
        | 'fade-down'
        | 'fade-left'
        | 'fade-right'
        | 'slide-up'
        | 'slide-down'
        | 'slide-left'
        | 'slide-right';

    /**
     * 是否展示组件
     *
     * @default true
     */
    show?: boolean;

    /**
     * 动画时长，单位为毫秒
     *
     * @default 300
     */
    duration?: number | object;

    /**
     * 自定义样式
     */
    'custom-style'?: string;
}

export interface VantTransitionEvents {
    /**
     * 进入前触发
     */
    'bind:before-enter': WechatMiniprogram.EventCallback;

    /**
     * 进入中触发
     */
    'bind:enter': WechatMiniprogram.EventCallback;

    /**
     * 进入后触发
     */
    'bind:after-enter': WechatMiniprogram.EventCallback;

    /**
     * 离开前触发
     */
    'bind:before-leave': WechatMiniprogram.EventCallback;

    /**
     * 离开中触发
     */
    'bind:leave': WechatMiniprogram.EventCallback;

    /**
     * 离开后触发
     */
    'bind:after-leave': WechatMiniprogram.EventCallback;
}
