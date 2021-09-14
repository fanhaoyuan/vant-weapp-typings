import { VantComponent } from '../base';

/* eslint-disable camelcase */
export interface VantAreaList {
    province_list: Record<number, string>;
    city_list: Record<number, string>;
    county_list: Record<number, string>;
}

export interface VantAreaProps {
    /**
     * 当前选中的省市区`code`
     */
    value?: string;

    /**
     * 顶部栏标题
     */
    title?: string;

    /**
     * 省市区数据
     */
    'area-list'?: VantAreaList;

    /**
     * 省市区显示列数，3-省市区，2-省市，1-省
     *
     * @default 3
     */
    'columns-num'?: string | number;

    /**
     * 列占位提示文字
     *
     * @default []
     */
    'columns-placeholder'?: string[];

    /**
     * 是否显示加载状态
     *
     * @default false
     */
    loading?: boolean;

    /**
     * 选项高度
     *
     * @default 44
     */
    'item-height'?: number;

    /**
     * 可见的选项个数
     *
     * @default 6
     */
    'visible-item-count'?: number;

    /**
     * 确认按钮文字
     *
     * @default '确认'
     */
    'confirm-button-text'?: string;

    /**
     * 取消按钮文字
     *
     * @default '取消'
     */
    'cancel-button-text'?: string;
}

export interface VantAreaEvents {
    /**
     * 点击右上方完成按钮
     */
    'bind:confirm'?: WechatMiniprogram.EventCallback;

    /**
     * 点击取消按钮时
     */
    'bind:cancel'?: WechatMiniprogram.EventCallback;

    /**
     * 选项改变时触发
     */
    'bind:change'?: WechatMiniprogram.EventCallback;
}

export type VantArea = VantComponent<VantAreaProps, VantAreaEvents>;

declare const Area: VantArea;

export default Area;
