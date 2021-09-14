import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantStepperProps {
    /**
     * 在表单内提交时的标识符
     */
    name?: string;

    /**
     * 输入值
     *
     * @default 最小值
     */
    value?: string | number;

    /**
     * 最小值
     *
     * @default 1
     */
    min?: string | number;

    /**
     * 最大值
     */
    max?: string | number;

    /**
     * 步长
     *
     * @default 1
     */
    step?: string | number;

    /**
     * 是否只允许输入整数
     *
     * @default false
     */
    integer?: boolean;

    /**
     * 是否禁用
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否禁用输入框
     *
     * @default false
     */
    'disable-input'?: boolean;

    /**
     * 是否开启异步变更，开启后需要手动控制输入值
     *
     * @default false
     */
    'async-change'?: boolean;

    /**
     * 输入框宽度，默认单位为`px`
     *
     * @default '32px'
     */
    'input-width'?: string | number;

    /**
     * 按钮大小，默认单位为 px，输入框高度会和按钮大小保持一致
     *
     * @default	'28px'
     */
    'button-size'?: string | number;

    /**
     * 是否显示增加按钮
     *
     * @default true
     */
    'show-plus'?: boolean;

    /**
     * 是否显示减少按钮
     *
     * @default true
     */
    'show-minus'?: boolean;

    /**
     * 固定显示的小数位数
     */
    'decimal-length'?: number;

    /**
     * 样式风格
     */
    theme?: 'round';

    /**
     * 是否禁用增加按钮
     */
    'disable-plus'?: boolean;

    /**
     * 是否禁用减少按钮
     */
    'disable-minus'?: boolean;

    /**
     * 是否开启长按手势
     *
     * @default true
     */
    'long-press'?: boolean;
}

export interface VantStepperEvents {
    /**
     * 当绑定值变化时触发的事件
     */
    'bind:change'?: WechatMiniprogram.EventCallback;

    /**
     * 点击不可用的按钮时触发
     */
    'bind:overlimit'?: WechatMiniprogram.EventCallback;

    /**
     * 点击增加按钮时触发
     */
    'bind:plus'?: WechatMiniprogram.EventCallback;

    /**
     * 点击减少按钮时触发
     */
    'bind:minus'?: WechatMiniprogram.EventCallback;
    /**
     * 输入框聚焦时触发
     */
    'bind:focus'?: WechatMiniprogram.EventCallback;

    /**
     * 输入框失焦时触发
     */
    'bind:blur'?: WechatMiniprogram.EventCallback;
}

export interface VantStepperExternalClassName extends VantBaseExternalClassName {
    /**
     * 输入框样式类
     */
    'input-class'?: string;

    /**
     * 加号按钮样式类
     */
    'plus-class'?: string;

    /**
     * 减号按钮样式类
     */
    'minus-class'?: string;
}

export type VantStepper = VantComponent<VantStepperProps, VantStepperEvents, VantStepperExternalClassName>;

declare const Stepper: VantStepper;

export default Stepper;
