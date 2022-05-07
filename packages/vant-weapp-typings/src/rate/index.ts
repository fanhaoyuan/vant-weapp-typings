import { VantBaseExternalClassName, VantComponent, VantEventHandler } from '../base';

export interface VantRateProps {
    /**
     * 在表单内提交时的标识符
     */
    name?: string;

    /**
     * 当前分值
     */
    value?: number;

    /**
     * 图标总数
     *
     * @default 5
     */
    count?: number;

    /**
     * 图标大小，默认单位为`px`
     *
     * @default `20px`
     */
    size?: string | number;

    /**
     * 图标间距，默认单位为`px`
     *
     * @default '4px'
     */
    gutter?: string | number;

    /**
     * 选中时的颜色
     *
     * @default '#ffd21e'
     */
    color?: string;

    /**
     * 未选中时的颜色
     *
     * @default '#c7c7c7'
     */
    'void-color'?: string;

    /**
     * 选中时的图标名称或图片链接，可选值见`Icon`组件
     *
     * @default 'star'
     */
    icon?: string;

    /**
     * 未选中时的图标名称或图片链接，可选值见`Icon`组件
     *
     * @default 'star-o'
     */
    'void-icon'?: string;

    /**
     * 是否允许半选
     *
     * @default false
     */
    'allow-half'?: boolean;

    /**
     * 是否为只读状态
     *
     * @default false
     */
    readonly?: boolean;

    /**
     * 是否禁用评分
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 禁用时的颜色
     *
     * @default '#bdbdbd'
     */
    'disabled-color'?: string;

    /**
     * 是否可以通过滑动手势选择评分
     *
     * @default true
     */
    touchable?: boolean;
}

/**
 * @deprecated
 */
export interface VantRateChangeEvent extends WechatMiniprogram.BaseEvent {
    detail: number;
}

export interface VantRateEvents {
    /**
     * 当前分值变化时触发的事件
     */
    'bind:change'?: VantEventHandler<number>;
}

export interface VantRateExternalClassName extends VantBaseExternalClassName {
    /**
     * 图标样式类
     */
    'icon-class'?: string;
}

export type VantRate = VantComponent<VantRateProps, VantRateEvents, VantRateExternalClassName>;
