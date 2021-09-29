import { VantComponent } from '../base';

export interface Day {
    /**
     * 日期对应的 Date 对象
     */
    date?: Date;

    /**
     * 日期类型
     */
    type?: 'selected' | 'start' | 'middle' | 'end' | 'disabled';

    /**
     * 中间显示的文字
     */
    text?: string;

    /**
     * 上方的提示信息
     */
    topInfo?: string;

    /**
     * 下方的提示信息
     */
    bottomInfo?: string;
}

export interface VantCalendarPoppableProps {
    /**
     * 当`Canlendar`的`poppable`为`true`时有效
     *
     * 是否显示日历弹窗
     *
     * @default false
     */
    show?: boolean;

    /**
     * 当`Calendar`的`poppable`为`true`时有效
     *
     * 弹出位置
     *
     * @default 'bottom'
     */
    position?: 'top' | 'right' | 'left' | 'bottom';

    /**
     * 当`Calendar`的`poppable`为`true`时有效
     *
     * 是否显示圆角弹窗
     *
     * @default true
     */
    round?: boolean;
    /**
     * 当`Calendar`的`poppable`为`true`时有效
     *
     * 是否在点击遮罩层后关闭
     *
     * @default true
     */
    'close-on-click-overlay'?: boolean;
    /**
     * `Calendar`的`poppable`为`true`时有效
     *
     * 是否开启底部安全区适配
     *
     * @default true
     */
    'safe-area-inset-bottom'?: boolean;
}

export interface VantCalendarRangeProps {
    /**
     * `Calendar`的`type`为`range`时有效
     *
     * 日期区间最多可选天数，默认无限制
     */
    'max-range'?: string | number;

    /**
     * `Calendar`的`type`为`range`时有效
     *
     * 范围选择超过最多可选天数时的提示文案
     *
     * @default '选择天数不能超过 xx 天'
     */
    'range-prompt'?: string | null;

    /**
     * `Calendar`的`type`为`range`时有效
     *
     * 范围选择超过最多可选天数时，是否展示提示文案
     *
     * @default true
     */
    'show-range-prompt'?: boolean;

    /**
     * `Calendar`的`type`为`range`时有效
     *
     * 是否允许日期范围的起止时间为同一天
     *
     * @default false
     */
    'allow-same-day'?: boolean;
}

export interface VantCalendarProps extends VantCalendarRangeProps, VantCalendarPoppableProps {
    /**
     * 选择类型
     *
     * `single` 表示选择单个日期
     *
     * `multiple` 表示选择多个日期
     *
     * `range` 表示选择日期区间
     *
     * @default 'single'
     */
    type?: 'single' | 'multiple' | 'range';

    /**
     * 日历标题
     *
     * @default '日期选择'
     */
    title?: string;

    /**
     * 主题色，对底部按钮和选中日期生效
     *
     * @default '#ee0a24'
     */
    color?: string;
    /**
     * 可选择的最小日期
     *
     * @default 当前日期的`timestamp`
     */
    'min-date'?: number;
    /**
     * 可选择的最大日期
     *
     * @default 当前日期的六个月后的`timestamp`
     */
    'max-date'?: number;

    /**
     * 默认选中的日期，`type`为`multiple`或`range`时为数组
     *
     * @default 今天的`timestamp`
     */
    'default-date'?: number | number[];

    /**
     * 日期行高
     *
     * @default 64
     */
    'row-height'?: number | string;

    /**
     * 日期格式化函数
     */
    formatter?: (day: Day) => Day;

    /**
     * 是否以弹层的形式展示日历
     *
     * @default true
     */
    poppable?: boolean;

    /**
     * 是否显示月份背景水印
     *
     * @default true
     */
    'show-mark'?: boolean;

    /**
     * 是否展示日历标题
     *
     * @default true
     */
    'show-title'?: boolean;

    /**
     * 是否展示日历副标题（年月）
     *
     * @default true
     */
    'show-subtitle'?: boolean;

    /**
     * 是否展示确认按钮
     *
     * @default true
     */
    'show-confirm'?: boolean;

    /**
     * 确认按钮的文字
     *
     * @default '确定'
     */
    'confirm-text'?: string;

    /**
     * 确认按钮处于禁用状态时的文字
     *
     * @default '确定'
     */

    'confirm-disabled-text'?: string;

    /**
     * 设置周起始日
     *
     * 范围为`[0, 6]`
     *
     * @default 0
     */
    'first-day-of-week'?: number;
}

export interface VantCalendarEvents {
    /**
     * 点击任意日期时触发
     */
    select?: (value: Date | Date[]) => void;

    /**
     * 当`Calendar`的`type`为`multiple`时,点击已选中的日期时触发
     */
    unselect?: (value: Date) => void;

    /**
     * 日期选择完成后触发，若`show-confirm`为`true`，则点击确认按钮后触发
     */
    confirm?: (value: Date | Date[]) => void;

    /**
     * 打开弹出层时触发
     */
    open?: WechatMiniprogram.EventCallback;

    /**
     * 关闭弹出层时触发
     */
    close?: WechatMiniprogram.EventCallback;

    /**
     * 打开弹出层且动画结束后触发
     */
    opened?: WechatMiniprogram.EventCallback;

    /**
     * 关闭弹出层且动画结束后触发
     */
    closed?: WechatMiniprogram.EventCallback;

    /**
     * 范围选择超过最多可选天数时触发
     */
    'over-range'?: WechatMiniprogram.EventCallback;

    /**
     * 点击日历副标题时触发
     *
     * @version `v1.8.1`
     *
     *
     */
    'click-subtitle'?: (e: WechatMiniprogram.TouchEvent) => void;
}

export type VantCalendar = VantComponent<VantCalendarProps, VantCalendarEvents>;
