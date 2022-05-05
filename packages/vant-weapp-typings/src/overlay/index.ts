import { VantComponent } from '../base';

export interface VantOverlayProps {
    /**
     * 是否展示遮罩层
     *
     * @default false
     */
    show?: boolean;

    /**
     * `z-index` 层级
     *
     * @default 1
     */
    'z-index'?: string | number;

    /**
     * 动画时长，单位秒
     *
     * @default 0.3
     */
    duration?: string | number;

    /**
     * 自定义类名
     */
    'class-name'?: string;

    /**
     * 自定义样式
     */
    'custom-style'?: string;

    /**
     * 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
     *
     * @version `v1.7.3`
     *
     * @default true
     */
    'lock-scroll'?: boolean;
}

export interface VantOverlayEvents {
    /**
     * 点击时触发
     */
    'bind:click'?: (event: WechatMiniprogram.BaseEvent) => void;
}

export type VantOverlay = VantComponent<VantOverlayProps, VantOverlayEvents>;
