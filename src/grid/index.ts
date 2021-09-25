import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantGridProps {
    /**
     * 列数
     *
     * @default 4
     */
    'column-num'?: number;

    /**
     * 图标大小，默认单位为`px`
     *
     * @version `v1.3.2`
     *
     * @default '28px'
     */
    'icon-size'?: string;

    /**
     * 格子之间的间距，默认单位为`px`
     *
     * @default 0
     */
    gutter?: string | number;

    /**
     * 是否显示边框
     *
     * @default true
     */
    border?: boolean;

    /**
     * 是否将格子内容居中显示
     *
     * @default true
     */
    center?: boolean;

    /**
     * 是否将格子固定为正方形
     *
     * @default false
     */
    square?: boolean;

    /**
     * 是否开启格子点击反馈
     *
     * @default false
     */
    clickable?: boolean;

    /**
     * 格子内容排列的方向
     */
    direction?: 'horizontal' | 'vertical';

    /**
     * 是否调换图标和文本的位置
     *
     * @version `v1.7.0`
     *
     * @default false
     */
    reverse?: boolean;

    /**
     * 是否使用自定义内容的插槽
     *
     * @default false
     */
    'use-slot'?: boolean;
}

export type VantGridExternalClassName = VantBaseExternalClassName;

export type VantGrid = VantComponent<VantGridProps, {}, VantGridExternalClassName>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const Grid: VantGrid;

export default Grid;
