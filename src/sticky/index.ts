import { VantComponent } from '../base';

export interface VantStickyProps {
    /**
     * 吸顶时与顶部的距离，单位`px`
     *
     * @default 0
     */
    'offset-top'?: number;

    /**
     * 吸顶时的`z-index`
     *
     * @default 99
     */
    'z-index'?: number;

    /**
     * 一个函数，返回容器对应的 `NodesRef` 节点
     */
    container?: Function;

    /**
     * 当前滚动区域的滚动位置，非 `null` 时会禁用页面滚动事件的监听
     */
    'scroll-top'?: number;
}

export interface VantStickyEvents {
    /**
     * 滚动时触发
     */
    scroll?: (value?: {
        /**距离顶部位置 */
        scrollTop: number;
        /**是否吸顶 */
        isFixed: boolean;
    }) => void;
}

export type VantSticky = VantComponent<VantStickyProps, VantStickyEvents>;

declare const Sticky: VantSticky;

export default Sticky;
