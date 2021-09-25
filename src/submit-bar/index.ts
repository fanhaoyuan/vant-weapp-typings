import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantSubmitBarProps {
    /**
     * 价格（单位分）
     */
    price?: number;

    /**
     * 价格文案
     *
     * @default '合计：'
     */
    label?: string;

    /**
     * 价格右侧文案
     */
    'suffix-label'?: string;

    /**
     * 按钮文字
     */
    'button-text'?: string;

    /**
     * 按钮类型
     *
     * @default 'danger'
     */
    'button-type'?: 'primary' | 'info' | 'warning' | 'danger';

    /**
     * 提示文案
     */
    tip?: string | boolean;

    /**
     * 图标名称或图片链接，可选值见 `Icon` 组件
     */
    'tip-icon'?: string;

    /**
     * 是否禁用按钮
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否显示加载中的按钮
     *
     * @default false
     */
    loading?: boolean;

    /**
     * 货币符号
     *
     * @default '¥'
     */
    currency?: string;

    /**
     * 是否为 iPhoneX 留出底部安全距离
     *
     * @default true
     */
    'safe-area-inset-bottom'?: boolean;

    /**
     * 价格小数点后位数
     *
     * @default 2
     */
    'decimal-length'?: number;
}

export interface VantSubmitBarEvents {
    /**
     * 按钮点击事件回调
     */
    submit?: WechatMiniprogram.EventCallback;
}

export interface VantSubmitBarExternalClassName extends VantBaseExternalClassName {
    /**
     * 价格样式类
     */
    'price-class'?: string;

    /**
     * 按钮样式类
     */
    'button-class'?: string;

    /**
     * 订单栏样式类
     */
    'bar-class'?: string;
}

export type VantSubmitBar = VantComponent<VantSubmitBarProps, VantSubmitBarEvents, VantSubmitBarExternalClassName>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const SubmitBar: VantSubmitBar;

export default SubmitBar;
