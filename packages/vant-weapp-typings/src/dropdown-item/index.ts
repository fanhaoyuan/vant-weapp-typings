import { VantComponent } from '../base';

export interface VantDropdownItemOption {
    /**
     * 文字
     */
    text?: string;

    /**
     * 标识符
     */
    value?: string | number;

    /**
     * 左侧图标名称或图片链接
     */
    icon?: string;
}

export interface VantDropdownItemProps {
    /**
     * 当前选中项对应的 `value`
     */
    value?: number | string;

    /**
     * 菜单项标题
     *
     * @default 当前选中项文字
     */
    title?: string;

    /**
     * 选项数组
     *
     * @default []
     */
    options?: VantDropdownItemOption[];

    /**
     * 是否禁用菜单
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 标题额外类名
     */
    'title-class'?: string;

    /**
     * 自定义弹出层样式
     */
    'popup-style'?: string;
}

export interface VantDropdownItemChangeEvent extends WechatMiniprogram.BaseEvent {
    /**
     * 当前选中的 value
     */
    detail: number | string;
}

export interface VantDropdownItemEvents {
    /**
     * 点击选项导致 `value` 变化时触发
     */
    'bind:change'?: (event: VantDropdownItemChangeEvent) => void;

    /**
     * 打开菜单栏时触发
     */
    'bind:open'?: (event: WechatMiniprogram.BaseEvent) => void;

    /**
     * 关闭菜单栏时触发
     */
    'bind:close'?: (event: WechatMiniprogram.BaseEvent) => void;

    /**
     * 打开菜单栏且动画结束后触发
     */
    'bind:opened'?: (event: WechatMiniprogram.BaseEvent) => void;

    /**
     * 关闭菜单栏且动画结束后触发
     */
    'bind:closed'?: (event: WechatMiniprogram.BaseEvent) => void;
}

export type VantDropdownItem = VantComponent<VantDropdownItemProps, VantDropdownItemEvents>;
