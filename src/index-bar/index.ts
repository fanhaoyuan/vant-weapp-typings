import { VantComponent } from '../base';

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

export interface VantIndexBarEvents {
    /**
     * 选中字符时触发
     */
    select?: (value?: string | number) => void;
}

export type VantIndexBar = VantComponent<VantIndexBarProps, VantIndexBarEvents>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const IndexBar: VantIndexBar;

export default IndexBar;
