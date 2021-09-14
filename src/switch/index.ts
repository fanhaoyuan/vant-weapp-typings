import { VantBaseExternalClassName } from "../base";

export interface VantSwitchProps {
    /**
     * 在表单内提交时的标识符
     */
    name?: string;

    /**
     * 开关选中状态
     *
     * @default false
     */
    checked?: any;

    /**
     * 是否为加载状态
     *
     * @default false
     */
    loading?: boolean;
    /**
     * 是否为禁用状态
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 开关尺寸
     *
     * @default '30px'
     */
    size?: string;

    /**
     * 打开时的背景色
     *
     * @default '#1989fa'
     */
    'active-color'?: string;

    /**
     * 关闭时的背景色
     *
     * @default '#fff'
     */
    'inactive-color'?: string;

    /**
     * 打开时的值
     *
     * @default true
     */
    'active-value'?: any;

    /**
     * 关闭时的值
     *
     * @default false
     */
    'inactive-value'?: any;
}

export interface VantSwitchEvents {
    /**
     * 开关状态切换回调
     */
    'bind:change'?: WechatMiniprogram.EventCallback;
}

export interface VantSwitchExternalClassName extends VantBaseExternalClassName {
    /**
     * 圆点样式类
     */
    'node-class'?: string;
}