import {
    VantOpenTypeEvents,
    VantOpenTypeProps,
    VantBaseExternalClassName,
    VantBaseLoadingExternalClassName,
    VantComponent,
} from '../base';

export interface VantButtonProps extends VantOpenTypeProps {
    /**标识符 */
    id?: string;

    /**
     * 按钮类型
     *
     * @default 'default'
     */
    type?: 'primary' | 'info' | 'warning' | 'danger';

    /**
     * 按钮尺寸
     *
     * @default 'normal'
     */
    size?: 'normal' | 'large' | 'small' | 'mini';

    /**
     * 按钮颜色，支持传入`linear-gradient`渐变色
     *
     * @version `1.0.0`
     */
    color?: string;

    /**
     * 左侧图标名称或图片链接
     *
     * 可选值见`Icon`组件
     */
    icon?: string;

    /**
     * 图标类名前缀，同`Icon`组件的`class-prefix`属性
     * @default 'van-icon'
     */
    'class-prefix'?: string;

    /**
     * 是否为朴素按钮
     *
     * @default false
     */
    plain?: boolean;

    /**
     * 是否为块级元素
     *
     * @default false
     */
    block?: boolean;

    /**
     * 是否为圆形按钮
     *
     * @default false
     */
    round?: boolean;

    /**
     * 是否为方形按钮
     *
     * @default false
     */
    square?: boolean;

    /**
     * 是否禁用按钮
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否使用`0.5px`边框
     *
     * @default false
     */
    hairline?: boolean;

    /**
     * 是否显示为加载状态
     *
     * @default false
     */
    loading?: boolean;

    /**
     * 加载状态提示文字
     */
    'loading-text'?: string;

    /**
     * 加载状态图标类型
     *
     * @default 'circular'
     */
    'loading-type'?: 'spinner' | 'circular';

    /**
     * 加载图标大小
     *
     * @default 20px
     */
    'loading-size'?: string;

    /**
     * 自定义样式
     */
    'custom-style'?: string;

    /**
     * 微信开放能力，具体支持可参考微信官方文档
     *
     * {@link https://developers.weixin.qq.com/miniprogram/dev/component/button.html}
     */
    'open-type'?: string;

    /**
     * 按钮`dataset`，`open-type`为`share`时，
     * 可在`onShareAppMessage`事件的`event.target.dataset.detail`中看到传入的值
     */
    dataset?: any;

    /**
     * 用于`form`组件，可选值为`submit` `reset`，
     * 点击分别会触发`form`组件的`submit/reset`事件
     */
    'form-type'?: string;
}

export interface VantButtonEvents extends VantOpenTypeEvents {
    /**
     * 点击按钮，且按钮状态不为加载或禁用时触发
     */
    'bind:click'?: WechatMiniprogram.EventCallback;
}

export interface VantButtonExternalClassName extends VantBaseExternalClassName, VantBaseLoadingExternalClassName {}

export type VantButton = VantComponent<VantButtonProps, VantButtonEvents, VantButtonExternalClassName>;
