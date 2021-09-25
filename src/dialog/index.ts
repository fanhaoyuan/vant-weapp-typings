import { VantComponent } from '../base';
import { VantOpenTypeEvents, VantOpenTypeProps } from '../base/open-type';

export interface VantDialogProps extends VantOpenTypeProps {
    /**
     * 是否显示弹窗
     */
    show?: boolean;

    /**
     * 标题
     */
    title?: string;

    /**
     * 弹窗宽度，默认单位为`px`
     *
     * @default '320px'
     */
    width?: string | number;

    /**
     * 文本内容，支持通过`\n`换行
     */
    message?: string;

    /**
     * 样式风格
     *
     * @default 'default'
     */
    theme?: 'default' | 'round-button';

    /**
     * 内容对齐方式
     *
     * @default 'center'
     */
    'message-align'?: 'left' | 'center' | 'right';

    /**
     * `z-index`层级
     *
     * @default 100
     */
    'z-index'?: number;

    /**
     * 自定义类名，`dialog` 在自定义组件内时无效
     *
     * @default ''
     */
    'class-name'?: string;

    /**
     * 自定义样式
     *
     * @default ''
     */
    'custom-style'?: string;

    /**
     * 是否展示确认按钮
     *
     * @default true
     */
    'show-confirm-button'?: boolean;

    /**
     * 是否展示取消按钮
     *
     * @default false
     */
    'show-cancel-button'?: boolean;

    /**
     * 确认按钮的文案
     *
     * @default '确认'
     */
    'confirm-button-text'?: string;

    /**
     * 取消按钮的文案
     *
     * @default '取消'
     */
    'cancel-button-text'?: string;

    /**
     * 确认按钮的字体颜色
     *
     * @default '#ee0a24'
     */
    'confirm-button-color'?: string;

    /**
     * 取消按钮的字体颜色
     *
     * @default '#333'
     */
    'cancel-button-color'?: string;

    /**
     * 是否展示遮罩层
     *
     * @default true
     */
    overlay?: boolean;

    /**
     *
     * @version `v1.0.0`
     * 自定义遮罩层样式
     */
    'overlay-style'?: Partial<CSSStyleDeclaration>;

    /**
     * 点击遮罩层时是否关闭弹窗
     *
     * @default false
     */
    'close-on-click-overlay'?: boolean;

    /**
     * 是否使用自定义内容的插槽
     *
     * @default false
     */
    'use-slot'?: boolean;

    /**
     * 是否使用自定义标题的插槽
     *
     * @default false
     */
    'use-title-slot'?: boolean;

    /**
     * 已废弃，将在 `2.0.0` 移除，请使用 `beforeClose` 属性代替
     *
     * @deprecated
     *
     * @default false
     */
    'async-close'?: boolean;

    /**
     * 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 `Promise`
     */
    'before-close'?: (action) => boolean | Promise<boolean>;

    /**
     * 动画名称
     *
     * @default 'scale'
     */
    transition?: 'fade' | 'scale' | 'none';

    /**
     * 确认按钮的微信开放能力，具体支持可参考 微信官方文档
     */
    'confirm-button-open-type'?: string;
}

export interface VantDialogEvents extends VantOpenTypeEvents {
    /**
     * 弹窗关闭时触发
     */
    'bind:close'?: WechatMiniprogram.EventCallback;

    /**
     * 点击确认按钮时触发
     */
    'bind:confirm'?: WechatMiniprogram.EventCallback;

    /**
     * 点击取消按钮时触发
     */
    'bind:cancel'?: WechatMiniprogram.EventCallback;
}

export type VantDialog = VantComponent<VantDialogProps, VantDialogEvents>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const Dialog: VantDialog;

export default Dialog;
