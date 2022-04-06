import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantTabsProps {
    /**
     * 样式风格
     */
    type?: 'card' | 'line';

    /**
     * 标签主题色
     *
     * @default '#ee0a24'
     */
    color?: string;

    /**
     * 当前选中标签的标识符
     *
     * @default 0
     */
    active?: string | number;

    /**
     * 动画时间，单位秒
     *
     * @default 0.3
     */
    duration?: number;

    /**
     * 底部条宽度，默认单位`px`
     *
     * @default '40px'
     */
    'line-width'?: string | number;

    /**
     * 底部条高度，默认单位`px`
     *
     * @default '3px'
     */
    'line-height'?: string | number;

    /**
     * 是否开启切换标签内容时的转场动画
     *
     * @default false
     */
    animated?: boolean;

    /**
     * 是否展示外边框，仅在 `line` 风格下生效
     *
     * @default false
     */
    border?: boolean;

    /**
     * 是否省略过长的标题文字
     *
     * @default true
     */
    ellipsis?: boolean;

    /**
     * 是否使用粘性定位布局
     *
     * @default false
     */
    sticky?: boolean;

    /**
     * 是否开启手势滑动切换
     *
     * @default false
     */
    swipeable?: boolean;

    /**
     * 是否开启标签页内容延迟渲染
     *
     * @default true
     */
    'lazy-render'?: boolean;

    /**
     * 粘性定位布局下与顶部的最小距离，单位`px`
     */
    'offset-top'?: number;

    /**
     * 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
     *
     * @default 5
     */
    'swipe-threshold'?: number;

    /**
     * 标题选中态颜色
     */
    'title-active-color'?: string;

    /**
     * 标题默认态颜色
     */
    'title-inactive-color'?: string;

    /**
     * `z-index`层级
     *
     * @default 1
     */
    'z-index'?: number;
}

export interface VantTabsEventDetail {
    /**
     * 标签标识符
     */
    name: string;
    /**
     * 标题
     */
    title: string;
    /**
     * tab的序号
     */
    index: number;
}

export interface VantTabsEvents {
    /**
     * 点击标签时触发
     */
    'bind:click'?: (event: WechatMiniprogram.CustomEvent<VantTabsEventDetail>) => void;

    /**
     * 当前激活的标签改变时触发
     */
    'bind:change'?: (event: WechatMiniprogram.CustomEvent<VantTabsEventDetail>) => void;

    /**
     * 点击被禁用的标签时触发
     */
    'bind:disabled'?: (event: WechatMiniprogram.CustomEvent<VantTabsEventDetail>) => void;

    /**
     * 滚动时触发
     */
    'bind:scroll'?: (data?: { scrollTop: number; isFixed: boolean }) => void;
}

export interface VantTabsExternalClassName extends VantBaseExternalClassName {
    /**
     * 标签栏样式类
     */
    'nav-class'?: string;

    /**
     * 标签样式类
     */
    'tab-class'?: string;

    /**
     * 标签激活态样式类
     */
    'tab-active-class'?: string;
}

export type VantTabs = VantComponent<VantTabsProps, VantTabsEvents, VantTabsExternalClassName>;
