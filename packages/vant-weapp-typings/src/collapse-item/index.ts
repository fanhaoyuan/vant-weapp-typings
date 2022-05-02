import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantCollapseItemProps {
    /**
     * 唯一标识符，默认为索引值
     *
     * @default index
     */
    name?: string | number;

    /**
     * 标题栏左侧内容
     */
    title?: string | number;

    /**
     * 标题栏左侧图标名称或图片链接，可选值见 `Icon` 组件
     */
    icon?: string;

    /**
     * 标题栏右侧内容
     */
    value?: string | number;

    /**
     * 标题栏描述信息
     */
    label?: string;

    /**
     * 是否显示内边框
     *
     * @default true
     */
    border?: boolean;

    /**
     * 是否展示标题栏右侧箭头并开启点击反馈
     *
     * @default true
     */
    'is-link'?: boolean;

    /**
     * 是否开启点击反馈
     *
     * @default false
     */
    clickable?: boolean;

    /**
     * 是否禁用面板
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 标题栏大小
     *
     * @since `v1.10.3`
     */
    size?: 'large';
}

export interface VantCollapseItemExternalClassName extends VantBaseExternalClassName {
    /**
     * 内容样式类
     */
    'content-class'?: string;
}

export type VantCollapseItem = VantComponent<VantCollapseItemProps, {}, VantCollapseItemExternalClassName>;
