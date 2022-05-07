import { VantBaseExternalClassName, VantComponent, VantEventHandler } from '../base';

export interface VantSliderProps {
    /**
     * 当前进度百分比，在双滑块模式下为数组格式
     *
     * @default 0
     */
    value?: number | number[];

    /**
     * 是否禁用滑块
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 最大值
     *
     * @default 100
     */
    max?: number;

    /**
     * 最小值
     *
     * @default 0
     */
    min?: number;

    /**
     * 步长
     *
     * @default 1
     */
    step?: number;

    /**
     * 进度条高度，默认单位为 `px`
     *
     * @default '2px'
     */
    'bar-height'?: string | number;

    /**
     * 进度条激活态颜色
     *
     * @default '#1989fa'
     */
    'active-color'?: string;

    /**
     * 进度条默认颜色
     *
     * @default '#e5e5e5'
     */
    'inactive-color'?: string;

    /**
     * 是否使用按钮插槽
     *
     * @default false
     */
    'use-slot-button'?: boolean;

    /**
     * 是否开启双滑块模式
     *
     * @version `v1.8.4`
     *
     * @default false
     */
    range?: boolean;

    /**
     * 是否垂直展示
     *
     * @version `v1.8.5`
     *
     * @default false
     */
    vertical?: boolean;
}

/**
 * @deprecated
 */
export interface VantSliderChangeEvent extends WechatMiniprogram.BaseEvent {
    detail: number;
}

export interface VantSliderEvents {
    /**
     * 拖动进度条时触发
     */
    'bind:drag'?: (event: WechatMiniprogram.CustomEvent<{ value: number }>) => void;

    /**
     * 进度值改变后触发
     */
    'bind:change'?: VantEventHandler<number>;

    /**
     * 开始拖动时触发
     */
    'bind:drag-start'?: VantEventHandler;

    /**
     * 结束拖动时触发
     */
    'bind:drag-end'?: VantEventHandler;
}

export type VantSliderExternalClassName = VantBaseExternalClassName;

export type VantSlider = VantComponent<VantSliderProps, VantSliderEvents, VantSliderExternalClassName>;
