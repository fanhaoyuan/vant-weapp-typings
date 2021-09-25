import { VantBaseExternalClassName, VantComponent, VantOpenTypeProps } from '../base';

export interface VantGoodsActionIconProps extends Omit<VantOpenTypeProps, 'business-id'> {
    /**
     * 按钮文字
     */
    text?: string;

    /**
     * 图标类型，可选值见`icon`组件
     */
    icon?: string;

    /**
     * 图标右上角提示信息
     */
    info?: string | number;

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

    /**
     * 标识符
     */
    id?: string;

    /**
     * 是否禁用按钮
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否显示为加载状态
     *
     * @default false
     */
    loading?: boolean;

    /**
     * 微信开放能力，具体支持可参考 微信官方文档
     */
    'open-type'?: string;
}

export interface VantGoodsActionIconExternalClassName extends VantBaseExternalClassName {
    /**
     * 文字样式类
     */
    'text-class'?: string;
}

export type VantGoodsActionIcon = VantComponent<VantGoodsActionIconProps, {}, VantGoodsActionIconExternalClassName>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const GoodsActionIcon: VantGoodsActionIcon;

export default GoodsActionIcon;
