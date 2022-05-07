import { VantBaseExternalClassName, VantComponent, VantEventHandler } from '../base';

export interface VantGridItemProps {
    /**
     * 文字
     */
    text?: string;

    /**
     * 图标名称或图片链接，可选值见 `Icon` 组件
     */
    icon?: string;

    /**
     * 图标颜色
     */
    'icon-color'?: string;

    /**
     * 第三方图标前缀
     *
     * @version `v1.7.0`
     *
     * @default 'van-icon'
     */
    'icon-prefix'?: string;

    /**
     * 是否显示图标右上角小红点
     *
     * @default false
     */
    dot?: boolean;

    /**
     * 图标右上角徽标的内容
     */
    badge?: string | number;

    /**
     * 点击后跳转的链接地址
     */
    url?: string;

    /**
     * 链接跳转类型
     *
     * @default 'navigateTo'
     */
    'link-type'?: 'redirectTo' | 'switchTab' | 'reLaunch';
}

export interface VantGridItemEvents {
    /**
     * 点击格子时触发
     */
    'bind:click'?: VantEventHandler;
}

export interface VantGridItemExternalClassName extends VantBaseExternalClassName {
    /**
     * 内容样式类
     */
    'content-class'?: string;

    /**
     * 图标样式类
     */
    'icon-class'?: string;

    /**
     * 文本样式类
     */
    'text-class'?: string;
}

export type VantGridItem = VantComponent<VantGridItemProps, VantGridItemEvents, VantGridItemExternalClassName>;
