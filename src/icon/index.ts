import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantIconProps {
    /**
     * 图标名称或图片链接
     */
    name?: string;

    /**
     * 是否显示图标右上角小红点
     *
     * @default false
     */
    dot?: boolean;

    /**
     * 图标右上角文字提示
     */
    info?: string | number;

    /**
     * 图标颜色
     *
     * @default 'inherit'
     */
    color?: string;

    /**
     * 图标大小，如 20px，2em，默认单位为px
     *
     * @default 'inherit'
     */
    size?: string | number;
    /**
     * 自定义样式
     */
    'custom-style'?: string;

    /**
     * 类名前缀
     *
     * @default 'van-icon'
     */
    'class-prefix'?: string;
}

export interface VantIconEvents {
    /**
     * 点击图标时触发
     */
    'bind:click'?: WechatMiniprogram.EventCallback;
}

export type VantIconExternalClassName = VantBaseExternalClassName;

export type VantIcon = VantComponent<VantIconProps, VantIconEvents, VantIconExternalClassName>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const Icon: VantIcon;

export default Icon;
