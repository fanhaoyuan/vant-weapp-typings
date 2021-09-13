export interface VantPickerColumn {
    /**
     * 列中对应的备选值
     */
    values: string[];

    /**
     * 初始选中项的索引，默认为 `0`
     *
     * @default 0
     */
    defaultIndex: number;
}

export interface VantPickerProps {
    /**
     * 对象数组，配置每一列显示的数据
     *
     * @default []
     */
    columns?: VantPickerColumn[];

    /**
     * 是否显示顶部栏
     *
     * @default false
     */
    'show-toolbar'?: boolean;

    /**
     * 顶部栏位置
     *
     * @default 'top'
     */
    'toolbar-position'?: 'bottom' | 'top';

    /**
     * 顶部栏标题
     *
     * @default ''
     */
    title?: string;

    /**
     * 是否显示加载状态
     *
     * @default false
     */
    loading?: boolean;

    /**
     * 选项对象中，文字对应的 `key`
     *
     * @default 'text'
     */
    'value-key'?: string;

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

    /**
     * 单列选择器的默认选中项索引
     *
     * @default 0
     */
    'default-index'?: number;
}

export interface VantPickerEvents {
    /**
     * 点击完成按钮时触发
     *
     * 单列：选中值，选中值对应的索引
     *
     * 多列：所有列选中值，所有列选中值对应的索引
     */
    confirm?: WechatMiniprogram.EventCallback;

    /**
     * 点击取消按钮时触发
     *
     * 单列：选中值，选中值对应的索引
     *
     * 多列：所有列选中值，所有列选中值对应的索引
     */
    cancel?: WechatMiniprogram.EventCallback;

    /**
     * 选项改变时触发
     *
     * 单列：`Picker` 实例，选中值，选中值对应的索引
     *
     * 多列：`Picker` 实例，所有列选中值，当前列对应的索引
     */
    change?: WechatMiniprogram.EventCallback;
}
