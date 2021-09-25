import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantCellProps {
    /**
     * 左侧图标名称或图片链接，可选值见 Icon 组件
     */
    icon?: string;

    /**
     * 左侧标题
     */
    title?: string | number;

    /**
     * 标题宽度，须包含单位
     */
    'title-width'?: string;

    /**
     * 右侧内容
     */
    value?: string | number;

    /**
     * 标题下方的描述信息
     */
    label?: string;

    /**
     * 单元格大小
     */
    size?: 'large';

    /**
     * 是否显示下边框
     *
     * @default true
     */
    border?: boolean;

    /**
     * 是否使内容垂直居中
     *
     * @default false
     */
    center?: boolean;

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
     * 是否开启点击反馈
     *
     * @default false
     */
    clickable?: boolean;

    /**
     * 是否展示右侧箭头并开启点击反馈
     *
     * @default false
     */
    'is-link'?: boolean;

    /**
     * 是否显示表单必填星号
     *
     * @default false
     */
    required?: boolean;

    /**
     * 箭头方向
     */
    'arrow-direction'?: 'left' | 'up' | 'down';

    /**
     * 是否使用`label slot`
     *
     * @default false
     */
    'use-label-slot'?: boolean;

    /**
     * 标题样式
     *
     * @version `v1.4.0`
     */
    'title-style'?: string;
}

export interface VantCellEvents {
    /**
     * 点击单元格时触发
     */
    'bind:click'?: WechatMiniprogram.EventCallback;
}

export interface VantCellExternalClassName extends VantBaseExternalClassName {
    /**
     * 标题样式类
     */
    'title-class'?: string;

    /**
     * 描述信息样式类
     */
    'label-class'?: string;

    /**
     * 右侧内容样式类
     */
    'value-class'?: string;
}

export type VantCell = VantComponent<VantCellProps, VantCellEvents, VantCellExternalClassName>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const Cell: VantCell;

export default Cell;
