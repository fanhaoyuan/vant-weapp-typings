import { VantComponent } from '../base';

export interface VantTabbarProps {
    /**
     * 当前选中标签的索引
     */
    active?: number;

    /**
     * 是否固定在底部
     *
     * @default true
     */
    fixed?: boolean;

    /**
     * 固定在底部时，是否在标签位置生成一个等高的占位元素
     *
     * @default false
     */
    placeholder?: boolean;

    /**
     * 是否展示外边框
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
     * 选中标签的颜色
     *
     * @default '#1989fa'
     */
    'active-color'?: string;

    /**
     * 未选中标签的颜色
     *
     * @default '#7d7e80'
     */
    'inactive-color'?: string;

    /**
     * 是否为 iPhoneX 留出底部安全距离
     *
     * @default true
     */
    'safe-area-inset-bottom'?: boolean;
}

export interface VantTabbarEvents {
    /**
     * 切换标签时触发
     */
    'bind:change'?: WechatMiniprogram.EventCallback;
}

export type VantTabbar = VantComponent<VantTabbarProps, VantTabbarEvents>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const Tabbar: VantTabbar;

export default Tabbar;
