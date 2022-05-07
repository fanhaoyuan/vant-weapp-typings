import { VantComponent, VantEventHandler } from '../base';

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

export type VantSwipeCellPosition = 'left' | 'right';

export type VantSwipeCellClickPosition = VantSwipeCellPosition | 'cell' | 'outside';

/**
 * @deprecated
 */
export interface VantSwipeCellClickEvent extends WechatMiniprogram.BaseEvent {
    detail: VantSwipeCellClickPosition;
}

export interface VantSwipeCellBaseEventDetail {
    name: string | number;
    position: VantSwipeCellPosition;
}

export interface VantSwipeCellCloseEventDetail extends VantSwipeCellBaseEventDetail {
    /**
     * SwipeCell 实例
     */
    instance: Record<string, any>;
}

export interface VantSwipeCellEvents {
    /**
     * 点击时触发
     */
    'bind:click'?: VantEventHandler<VantSwipeCellClickPosition>;

    /**
     * 关闭时触发
     */
    'bind:close'?: VantEventHandler<VantSwipeCellCloseEventDetail>;

    /**
     * 打开时触发
     */
    'bind:open'?: VantEventHandler<VantSwipeCellBaseEventDetail>;
}

export type VantSwipeCell = VantComponent<VantSwipeCellProps, VantSwipeCellEvents>;
