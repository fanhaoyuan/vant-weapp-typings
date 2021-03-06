import { VantComponent, VantEventHandler } from '../base';

export interface VantIndexBarProps {
    /**
     * 索引字符列表
     *
     * @default [A,B,...Z]
     */
    'index-list'?: string[] | number[];

    /**
     * `z-index`层级
     *
     * @default 1
     */
    'z-index'?: number;

    /**
     * 是否开启锚点自动吸顶
     *
     * @default true
     */
    sticky?: boolean;

    /**
     * 锚点自动吸顶时与顶部的距离
     *
     * @default 0
     */
    'sticky-offset-top'?: number;

    /**
     * 索引字符高亮颜色
     *
     * @default '#07c160'
     */
    'highlight-color'?: string;
}

/**
 * @deprecated
 */
export interface VantIndexBarSelectEvent extends WechatMiniprogram.BaseEvent {
    /**
     * 索引字符
     */
    detail: string | number;
}

export interface VantIndexBarEvents {
    /**
     * 选中字符时触发
     */
    'bind:select'?: VantEventHandler<string | number>;
}

export type VantIndexBar = VantComponent<VantIndexBarProps, VantIndexBarEvents>;
