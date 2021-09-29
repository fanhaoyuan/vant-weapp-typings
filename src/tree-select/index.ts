import { VantComponent } from '../base';

export interface VantTreeSelectItem {
    /**
     * 作为匹配选中状态的标识
     */
    id?: number | string;

    /**
     * 导航名称
     */
    text?: string;

    /**
     * 导航名称右上角徽标，
     *
     * @version `v1.5.0`
     */
    badge?: number;

    /**
     * 是否在导航名称右上角显示小红点
     *
     * @version `v1.5.0`
     */
    dot?: boolean;

    /**
     * 禁用选项
     */
    disabled?: boolean;

    /**
     * 该导航下所有的可选项
     */
    children?: VantTreeSelectItem[];
}

export interface VantTreeSelectProps {
    /**
     * 分类显示所需的数据
     *
     * @default []
     */
    items?: VantTreeSelectItem[];

    /**
     * 高度，默认单位为`px`
     *
     * @default 300
     */
    height?: number | string;

    /**
     * 左侧选中项的索引
     *
     * @default 0
     */
    'main-active-index'?: number;

    /**
     * 右侧选中项的 id，支持传入数组
     *
     * @default 0
     */
    'active-id'?: string | number | (string | number)[];

    /**
     * 右侧项最大选中个数
     *
     * @default Infinity
     */
    max?: number;

    /**
     * 自定义右侧栏选中状态的图标
     *
     * @version `v1.5.0`
     *
     * @default 'success'
     */
    'selected-icon'?: string;
}

export interface VantTreeSelectEvents {
    /**
     * 左侧导航点击时，触发的事件
     */
    'bind:click-nav'?: WechatMiniprogram.EventCallback;

    /**
     * 右侧选择项被点击时，会触发的事件
     */
    'bind:click-item'?: WechatMiniprogram.EventCallback;
}

export interface VantTreeSelectExternalClassName {
    /**
     * 左侧选项样式类
     */
    'main-item-class'?: string;

    /**
     * 右侧选项样式类
     */
    'content-item-class'?: string;

    /**
     * 左侧选项选中样式类
     */
    'main-active-class'?: string;

    /**
     * 右侧选项选中样式类
     */
    'content-active-class'?: string;

    /**
     * 左侧选项禁用样式类
     */
    'main-disabled-class'?: string;

    /**
     * 右侧选项禁用样式类
     */
    'content-disabled-class'?: string;
}

export type VantTreeSelect = VantComponent<VantTreeSelectProps, VantTreeSelectEvents, VantTreeSelectExternalClassName>;
