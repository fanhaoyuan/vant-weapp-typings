import { VantBaseExternalClassName } from '../base';

export interface VantSearchProps {
    /**
     * 在表单内提交时的标识符
     */
    name?: string;

    /**
     * 搜索框左侧文本
     */
    label?: string;

    /**
     * 形状
     *
     * @default 'square'
     */
    shape?: 'round' | 'square';

    /**
     * 当前输入的值
     */
    value?: string | number;

    /**
     * 搜索框背景色
     *
     * @default '#f2f2f2'
     */
    background?: string;

    /**
     * 是否在搜索框右侧显示取消按钮
     *
     * @default false
     */
    'show-action'?: boolean;

    /**
     * @version v1.0.0
     *
     * @default '取消'
     */
    'action-text'?: string;

    /**
     * 获取焦点
     *
     * @default false
     */
    focus?: boolean;

    /**
     * 是否将输入内容标红
     *
     * @default false
     */
    error?: boolean;

    /**
     * 是否禁用输入框
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否只读
     *
     * @default false
     */
    readonly?: boolean;

    /**
     * 是否启用清除控件
     *
     * @default true
     */
    clearable?: boolean;

    /**
     * 显示清除图标的时机，`always`表示输入框不为空时展示，
     * `focus`表示输入框聚焦且不为空时展示
     * @version  `v1.8.4`
     *
     * @default 'focus'
     */
    'clear-trigger'?: 'always' | 'focus';

    /**
     * 清除图标名称或图片链接
     *
     * @version `v1.8.4`
     *
     * @default 'clear'
     */
    'clear-icon'?: string;

    /**
     * 最大输入长度，设置为`-1`的时候不限制最大长度
     *
     * @default -1
     */
    maxlength?: number;

    /**
     * 是否使用 `action slot`
     *
     * @default false
     */
    'use-action-slot'?: boolean;

    /**
     * 输入框为空时占位符
     */
    placeholder?: string;

    /**
     * 指定占位符的样式
     */
    'placeholder-style'?: string;

    /**
     * 输入框内容对齐方式
     *
     * @default 'left'
     */
    'input-align'?: 'left' | 'center' | 'right';

    /**
     * 是否使用输入框左侧图标 `slot`
     *
     * @default false
     */
    'use-left-icon-slot'?: boolean;

    /**
     * 是否使用输入框右侧图标`slot`
     *
     * @default false
     */
    'use-right-icon-slot'?: boolean;

    /**
     * 输入框左侧图标名称或图片链接，可选值见`Icon`组件（如果设置了`use-left-icon-slot`，则该属性无效）
     *
     * @default 'search'
     */
    'left-icon'?: string;

    /**
     * 输入框右侧图标名称或图片链接，可选值见`Icon`组件（如果设置了`use-right-icon-slot`，则该属性无效）
     */
    'right-icon'?: string;
}

export interface VantSearchEvents {
    /**
     * 确定搜索时触发
     */
    'bind:search'?: WechatMiniprogram.EventCallback;

    /**
     * 输入内容变化时触发
     */
    'bind:change'?: WechatMiniprogram.EventCallback;

    /**
     * 取消搜索搜索时触发
     */
    'bind:cancel'?: WechatMiniprogram.EventCallback;

    /**
     * 输入框聚焦时触发
     */
    'bind:focus'?: WechatMiniprogram.EventCallback;

    /**
     * 输入框失焦时触发
     */
    'bind:blur'?: WechatMiniprogram.EventCallback;

    /**
     * 点击清空控件时触发
     */
    'bind:clear'?: WechatMiniprogram.EventCallback;

    /**
     * 点击搜索区域时触发
     */
    'bind:click-input'?: WechatMiniprogram.EventCallback;
}

export interface VantSearchExternalClassName extends VantBaseExternalClassName {
    /**
     * 搜索框样式类
     */
    'field-class'?: string;

    /**
     * 输入框样式类
     */
    'input-class'?: string;

    /**
     * 取消按钮样式类
     */
    'cancel-class'?: string;
}
