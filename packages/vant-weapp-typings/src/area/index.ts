import { VantComponent, VantEventHandler } from '../base';

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

    /**
     * 是否显示顶部栏
     *
     * @default true
     *
     * @since `v1.10.3`
     */
    'show-toolbar'?: boolean;
}

/**
 * 选中列数据
 */
export interface VantAreaColumn {
    /**
     * 被选中的地区编码
     */
    code: string;
    /**
     * 被选中的地区名称
     */
    name: string;
}

/**
 * 基础事件详情
 */
export interface VantAreaBaseEventDetail {
    /**
     * 每个数据对应一列选项中被选中项的序号
     */
    index: number[];

    /**
     *  每个数据对应一列选项中被选中的数据
     */
    values: VantAreaColumn[];
}

/**
 * `bind:change`事件详情
 */
export interface VantAreaChangeEventDetail extends VantAreaBaseEventDetail {
    /**
     * Picker 实例
     */
    picker: Record<string, any>;
}

export interface VantAreaEvents {
    /**
     * 点击右上方完成按钮
     */
    'bind:confirm'?: VantEventHandler<VantAreaBaseEventDetail>;

    /**
     * 点击取消按钮时
     */
    'bind:cancel'?: VantEventHandler<VantAreaBaseEventDetail>;

    /**
     * 选项改变时触发
     */
    'bind:change'?: VantEventHandler<VantAreaChangeEventDetail>;
}

export type VantArea = VantComponent<VantAreaProps, VantAreaEvents>;
