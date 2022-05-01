import { VantBaseExternalClassName, VantComponent } from '../base';

/**
 * 步骤配置项
 */
export interface VantStepsOption {
    /**
     * 当前步骤名称
     */
    text?: string;
    /**
     * 当前步骤描述信息
     */
    desc?: string;
    /**
     * 当前步骤激活状态底部图标
     */
    inactiveIcon?: string;
    /**
     * 当前步骤未激活状态底部图标
     */
    activeIcon?: string;
}

export interface VantStepsProps {
    /**
     * 当前步骤
     *
     * @default 0
     */
    active?: number;

    /**
     * 当前步骤配置
     */
    steps?: VantStepsOption[];

    /**
     * 显示方向
     */
    direction?: 'horizontal' | 'vertical';

    /**
     * 激活状态颜色
     *
     * @default '#07c160'
     */
    'active-color'?: string;

    /**
     * 未激活状态颜色
     *
     * @default '#969799'
     */
    'inactive-color'?: string;

    /**
     * 激活状态底部图标，可选值见 `Icon` 组件
     *
     * @default 'checked'
     */
    'active-icon'?: string;

    /**
     * 未激活状态底部图标，可选值见 `Icon` 组件
     */
    'inactive-icon'?: string;
}

export interface VantStepsClickStepEvent extends WechatMiniprogram.BaseEvent {
    /**
     * 当前选中步骤索引
     */
    detail: number;
}

export interface VantStepsEvents {
    /**
     * 点击步骤时触发的事件
     */
    'bind:click-step'?: (event: VantStepsClickStepEvent) => void;
}

export interface VantStepsExternalClassName extends VantBaseExternalClassName {
    /**
     * 描述信息样式类
     */
    'desc-class'?: string;
}

export type VantSteps = VantComponent<VantStepsProps, VantStepsEvents, VantStepsExternalClassName>;
