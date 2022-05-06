import { VantComponent } from '../base';

export interface VantDateTimePickerProps {
    /**
     * 当前选中值
     */
    value?: string | number;

    /**
     * 类型, 不建议动态修改
     *
     * @default 'datetime'
     */
    type?: 'date' | 'time' | 'year-month' | 'datetime';

    /**
     * 可选的最小时间，精确到分钟
     *
     * @default '十年前'
     */
    'min-date'?: number;

    /**
     * 可选的最大时间，精确到分钟
     *
     * @default 十年后
     */
    'max-date'?: number;

    /**
     * 可选的最小小时，针对`time`类型
     *
     * @default 0
     */
    'min-hour'?: number;

    /**
     * 可选的最大小时，针对`time`类型
     *
     * @default 23
     */
    'max-hour'?: number;

    /**
     * 可选的最小分钟，针对`time`类型
     *
     * @default 0
     */
    'min-minute'?: number;

    /**
     * 可选的最大分钟，针对`time`类型
     *
     * @default 59
     */
    'max-minute'?: number;

    /**
     * 选项过滤函数
     */
    filter?: (type?: string, values?: any) => any;

    /**
     * 选项格式化函数
     */
    formatter?: (type?: string, value?: any) => any;

    /**
     * 顶部栏标题
     *
     * @default '''
     */
    title?: string;

    /**
     * 是否显示顶部栏
     *
     * @default true
     */
    'show-toolbar'?: boolean;

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
     * 可见的选项个数
     *
     * @default 6
     */
    'visible-item-count'?: number;
}

export interface VantDateTimePickerBaseEvent extends WechatMiniprogram.BaseEvent {
    detail: number;
}

export interface VantDateTimePickerEvents {
    /**
     * 当值变化时触发的事件
     */
    'bind:input'?: (event: VantDateTimePickerBaseEvent) => void;

    /**
     * 当值变化时触发的事件
     */
    'bind:change'?: (event: WechatMiniprogram.CustomEvent<Record<string, any>>) => void;

    /**
     * 点击完成按钮时触发的事件
     */
    'bind:confirm'?: (event: VantDateTimePickerBaseEvent) => void;

    /**
     * 点击取消按钮时触发的事件
     */
    'bind:cancel'?: (event: WechatMiniprogram.BaseEvent) => void;
}

export interface VantDateTimePickerExternalClassName {
    /**
     * 选中项样式类
     */
    'active-class'?: string;

    /**
     * 顶部栏样式类
     */
    'toolbar-class'?: string;

    /**
     * 列样式类
     */
    'column-class'?: string;
}

export type VantDateTimePicker = VantComponent<
    VantDateTimePickerProps,
    VantDateTimePickerEvents,
    VantDateTimePickerExternalClassName
>;
