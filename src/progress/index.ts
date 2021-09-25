import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantProgressProps {
    /**
     * 是否置灰
     *
     * @default false
     */
    inactive?: boolean;

    /**
     * 进度百分比
     *
     * @default 0
     */
    percentage?: number;

    /**
     * 进度条粗细，默认单位为`px`
     *
     * @default '4px'
     */
    'stroke-width'?: string | number;

    /**
     * 是否显示进度文字
     *
     * @default true
     */
    'show-pivot'?: boolean;

    /**
     * 进度条颜色
     *
     * @default '#1989fa'
     */
    color?: string;

    /**
     * 进度文字颜色
     *
     * @default '#fff'
     */
    'text-color'?: string;

    /**
     * 轨道颜色
     *
     * @default '#e5e5e5'
     */
    'track-color'?: string;

    /**
     * 文字显示
     *
     * @default 百分比文字
     */
    'pivot-text'?: string;

    /**
     * 文字背景色
     *
     * @default 与进度条颜色一致
     */
    'pivot-color'?: string;
}

export type VantProgressExternalClassName = VantBaseExternalClassName;

export type VantProgress = VantComponent<VantProgressProps, {}, VantProgressExternalClassName>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const Progress: VantProgress;

export default Progress;
