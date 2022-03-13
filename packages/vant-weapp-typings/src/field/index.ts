import { VantComponent } from '../base';

export interface VantFieldProps {
    /**
     * 在表单内提交时的标识符
     */
    name?: string;

    /**
     * 输入框左侧文本
     */
    label?: string;

    /**
     * 单元格大小
     */
    size?: 'large';

    /**
     * 当前输入的值
     */
    value?: string | number;

    /**
     * 可设置为任意原生类型
     *
     * @default 'text'
     */
    type?: 'number' | 'idcard' | 'textarea' | 'digit' | 'text';

    /**
     * 如果`type`为`textarea`且在一个`position:fixed`的区域，需要显示指定属性`fixed`为`true`
     *
     * @default false
     */
    fixed?: boolean;

    /**
     * 获取焦点
     *
     * @default false
     */
    focus?: boolean;

    /**
     * 是否显示内边框
     *
     * @default true
     */
    border?: boolean;

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
     * @default false
     */
    clearable?: boolean;

    /**
     * 是否开启点击反馈
     *
     * @default false
     */
    clickable?: boolean;

    /**
     * 是否显示表单必填星号
     *
     * @default false
     */
    required?: boolean;

    /**
     * 是否使内容垂直居中
     *
     * @default false
     */
    center?: boolean;

    /**
     * 是否是密码类型
     *
     * @default false
     */
    password?: boolean;

    /**
     * 标题宽度
     *
     * @default '6.2em'
     */
    'title-width'?: string;

    /**
     * 最大输入长度，设置为`-1`的时候不限制最大长度
     *
     * @default -1
     */
    maxlength?: number;

    /**
     * 输入框为空时占位符
     */
    placeholder?: string;

    /**
     * 指定`placeholder`的样式
     */
    'placeholder-style'?: string;

    /**
     * 自定义样式
     */
    'custom-style'?: string;

    /**
     * 是否展示右侧箭头并开启点击反馈
     *
     * @default false
     */
    'is-link'?: boolean;

    /**
     * 箭头方向
     */
    'arrow-direction'?: 'left' | 'up' | 'down';

    /**
     * 是否显示字数统计，需要设置`maxlength`属性
     *
     * @default false
     */
    'show-word-limit'?: boolean;

    /**
     * 是否将输入内容标红
     *
     * @default false
     */
    error?: boolean;

    /**
     * 底部错误提示文案，为空时不展示
     *
     * @default ''
     */
    'error-message'?: string;

    /**
     * 底部错误提示文案对齐方式
     *
     * @default ''
     */
    'error-message-align'?: 'center' | 'right';

    /**
     * 输入框内容对齐方式
     *
     * @default 'left'
     */
    'input-align'?: 'center' | 'right' | 'left';

    /**
     * 是否自适应内容高度，只对`textarea`有效，可传入对象。
     *
     * 单位为`px`
     *
     * @default false
     */
    autosize?: boolean | { maxHeight?: number; minHeight?: number };

    /**
     * 左侧图标名称或图片链接，可选值见`Icon`组件
     */
    'left-icon'?: string;

    /**
     * 右侧图标名称或图片链接，可选值见`Icon`组件
     */
    'right-icon'?: string;

    /**
     * 设置键盘右下角按钮的文字，仅在`type='text'`时生效
     *
     * @default 'done'
     */
    'confirm-type'?: string;

    /**
     * 点击键盘右下角按钮时是否保持键盘不收起，在`type='textarea'`时无效
     *
     * @default false
     */
    'confirm-hold'?: boolean;

    /**
     * `focus`时，点击页面的时候不收起键盘
     *
     * @default false
     */
    'hold-keyboard'?: boolean;

    /**
     * 输入框聚焦时底部与键盘的距离
     *
     * @default 50
     */
    'cursor-spacing'?: number;

    /**
     * 键盘弹起时，是否自动上推页面
     *
     * @default true
     */
    'adjust-position'?: boolean;

    /**
     * 是否显示键盘上方带有”完成“按钮那一栏，只对`textarea`有效
     *
     * @default true
     */
    'show-confirm-bar'?: boolean;

    /**
     * 光标起始位置，自动聚集时有效，需与`selection-end`搭配使用
     *
     * @default -1
     */
    'selection-start'?: number;

    /**
     * 光标结束位置，自动聚集时有效，需与`selection-start`搭配使用
     *
     * @default -1
     */
    'selection-end'?: number;

    /**
     * 自动聚焦，拉起键盘
     *
     * @default false
     */
    'auto-focus'?: boolean;

    /**
     * 是否去掉`iOS`下的默认内边距，只对`textarea`有效
     *
     * @default true
     */
    'disable-default-padding'?: boolean;

    /**
     * 指定 `focus` 时的光标位置
     *
     * @default -1
     */
    cursor?: number;

    /**
     * 显示清除图标的时机，`always` 表示输入框不为空时展示，
     * `focus` 表示输入框聚焦且不为空时展示
     *
     * @version v1.8.4
     *
     * @default 'focus'
     */
    'clear-trigger'?: 'always' | 'focus';

    /**
     * 强制 `input` 处于同层状态，默认 `focus` 时 `input` 会切到非同层状态 (仅在 `iOS` 下生效)
     *
     * @version `v1.9.2`
     *
     * @default false
     */
    'always-embed'?: boolean;
}

export interface VantFieldEvents {
    /**
     * 输入内容时触发
     */
    'bind:input'?: WechatMiniprogram.EventCallback;

    /**
     * 输入内容时触发
     */
    'bind:change'?: WechatMiniprogram.EventCallback;

    /**
     * 点击完成按钮时触发
     */
    'bind:confirm'?: WechatMiniprogram.EventCallback;

    /**
     * 点击尾部图标时触发
     */
    'bind:click-icon'?: WechatMiniprogram.EventCallback;

    /**
     * 输入框聚焦时触发
     */
    'bind:focus'?: WechatMiniprogram.EventCallback;

    /**
     * 输入框失焦时触发1
     */
    'bind:blur'?: WechatMiniprogram.EventCallback;

    /**
     * 点击清空控件时触发
     */
    'bind:clear'?: WechatMiniprogram.EventCallback;

    /**
     * 点击输入区域时触发
     */
    'bind:click-input'?: WechatMiniprogram.EventCallback;

    /**
     * 输入框行数变化时调用，只对 `textarea` 有效
     */
    'bind:linechange'?: WechatMiniprogram.EventCallback;

    /**
     * 键盘高度发生变化的时候触发此事件
     */
    'bind:keyboardheightchange'?: WechatMiniprogram.EventCallback;
}

export interface VantFieldExternalClassName {
    /**
     * 左侧文本样式类
     */
    'label-class'?: string;

    /**
     * 输入框样式类
     */
    'input-class'?: string;

    /**
     * 右侧图标样式类
     */
    'right-icon-class'?: string;
}

export type VantField = VantComponent<VantFieldProps, VantFieldEvents, VantFieldExternalClassName>;
