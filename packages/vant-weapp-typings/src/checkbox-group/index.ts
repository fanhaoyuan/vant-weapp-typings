import { VantComponent, VantEventHandler } from '../base';

export interface VantCheckboxGroupProps {
    /**
     * 在表单内提交时的标识符
     */
    name?: string;

    /**
     * 所有选中项的`name`
     */
    value?: string[];

    /**
     * 是否禁用所有单选框
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 设置最大可选数
     *
     * `0`为无限制
     *
     * @default 0
     */
    max?: number;

    /**
     * 排列方向
     *
     * @version `v1.7.0`
     */
    direction?: 'horizontal' | 'vertical';
}

export interface VantCheckboxGroupEvents {
    /**
     * 当绑定值变化时触发的事件
     */
    'bind:change'?: VantEventHandler<string[]>;
}

export type VantCheckboxGroup = VantComponent<VantCheckboxGroupProps, VantCheckboxGroupEvents>;
