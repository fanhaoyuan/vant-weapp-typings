import { VantComponent } from '../base';

export interface VantSwipeCellProps {
    /**
     * 标识符，可以在 `close` 事件的参数中获取到
     */
    name?: string | number;

    /**
     * 左侧滑动区域宽度
     *
     * @default 0
     */
    'left-width'?: number;

    /**
     * 右侧滑动区域宽度
     *
     * @default 0
     */
    'right-width'?: number;

    /**
     * 是否异步关闭
     *
     * @default false
     */
    'async-close'?: boolean;

    /**
     * 是否禁用滑动
     *
     * @version `v1.3.4`
     *
     * @default false
     */
    disabled?: boolean;
}

export interface VantSwipeCellEvents {
    /**
     * 点击时触发
     */
    click?: WechatMiniprogram.EventCallback;

    /**
     * 关闭时触发
     */
    close?: (data?: { position: 'left' | 'right'; instance; name: string }) => void;

    /**
     * 打开时触发
     */
    open?: (data?: { position: 'left' | 'right'; name: string }) => void;
}

export type VantSwipeCell = VantComponent<VantSwipeCellProps, VantSwipeCellEvents>;
