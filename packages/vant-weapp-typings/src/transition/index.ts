import { VantBaseExternalClassName, VantComponent, VantEventHandler } from '../base';

export interface VantTransitionProps {
    /**
     * 动画类型
     *
     * `fade` 淡入
     *
     * `fade-up` 上滑淡入
     *
     * `fade-down` 下滑淡入
     *
     * `fade-left` 左滑淡入
     *
     * `fade-right` 右滑淡入
     *
     * `slide-up` 上滑进入
     *
     * `slide-down`	下滑进入
     *
     * `slide-left`	左滑进入
     *
     * `slide-right` 右滑进入
     *
     * @default 'fade'
     */
    name?:
        | 'fade'
        | 'fade-up'
        | 'fade-down'
        | 'fade-left'
        | 'fade-right'
        | 'slide-up'
        | 'slide-down'
        | 'slide-left'
        | 'slide-right';

    /**
     * 是否展示组件
     *
     * @default true
     */
    show?: boolean;

    /**
     * 动画时长，单位为毫秒
     *
     * @default 300
     */
    duration?: number | object;

    /**
     * 自定义样式
     */
    'custom-style'?: string;
}

export interface VantTransitionEvents {
    /**
     * 进入前触发
     */
    'bind:before-enter'?: VantEventHandler;

    /**
     * 进入中触发
     */
    'bind:enter'?: VantEventHandler;

    /**
     * 进入后触发
     */
    'bind:after-enter'?: VantEventHandler;

    /**
     * 离开前触发
     */
    'bind:before-leave'?: VantEventHandler;

    /**
     * 离开中触发
     */
    'bind:leave'?: VantEventHandler;

    /**
     * 离开后触发
     */
    'bind:after-leave'?: VantEventHandler;
}

export interface VantTransitionExternalClassName extends VantBaseExternalClassName {
    /**
     * 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
     */
    'enter-class'?: string;

    /**
     * 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。
     *
     * 这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
     */
    'enter-active-class'?: string;

    /**
     * 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `enter-class` 被移除)，在过渡/动画完成之后移除。
     */
    'enter-to-class'?: string;

    /**
     * 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
     */
    'leave-class'?: string;

    /**
     * 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。
     *
     * 这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
     */
    'leave-active-class'?: string;

    /**
     * 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `leave-class` 被删除)，在过渡/动画完成之后移除。
     */
    'leave-to-class'?: string;
}

export type VantTransition = VantComponent<VantTransitionProps, VantTransitionEvents, VantTransitionExternalClassName>;
