import { VantBaseExternalClassName, VantComponent, VantEventHandler } from '../base';
import { VantTransitionEvents } from '../transition';

export interface VantPopupProps {
    /**
     * 是否显示弹出层
     *
     * @default false
     */
    show?: boolean;

    /**
     * `z-index`层级
     *
     * @default 100
     */
    'z-index'?: number;

    /**
     * 是否显示遮罩层
     *
     * @default true
     */
    overlay?: boolean;

    /**
     * 弹出位置
     *
     * @default 'center'
     */
    position?: 'top' | 'bottom' | 'center' | 'right' | 'left';

    /**
     * 动画时长，单位为毫秒
     *
     * @default 300
     */
    duration?: number | object;

    /**
     * 是否显示圆角
     *
     * @default false
     */
    round?: boolean;

    /**
     * 自定义弹出层样式
     *
     * @default ''
     */
    'custom-style'?: string;
    /**
     * 自定义遮罩层样式
     *
     * @default ''
     */
    'overlay-style'?: string;

    /**
     * 是否在点击遮罩层后关闭
     *
     * @default true
     */
    'close-on-click-overlay'?: boolean;

    /**
     * 是否显示关闭图标
     *
     * @default false
     */
    closeable?: boolean;

    /**
     * 关闭图标名称或图片链接
     *
     * @default 'cross'
     */
    'close-icon'?: string;

    /**
     * 是否为`iPhoneX`留出底部安全距离
     *
     * @default true
     */
    'safe-area-inset-bottom'?: boolean;

    /**
     * 是否留出顶部安全距离（状态栏高度）
     *
     * @default false
     */
    'safe-area-inset-top'?: boolean;

    /**
     * 是否锁定背景滚动
     *
     * @version `v1.7.3`
     *
     * @default true
     */
    'lock-scroll'?: boolean;
}

export interface VantPopupEvents extends VantTransitionEvents {
    /**
     * 关闭弹出层时触发
     */
    'bind:close'?: VantEventHandler;

    /**
     * 点击遮罩层时触发
     */
    'bind:click-overlay'?: VantEventHandler;
}

export type VantPopupExternalClassName = VantBaseExternalClassName;

export type VantPopup = VantComponent<VantPopupProps, VantPopupEvents, VantPopupExternalClassName>;
