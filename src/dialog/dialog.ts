import { VantDialogProps } from './index';

type VantDialogCommonProps = Pick<VantDialogProps, 'title' | 'width' | 'message' | 'theme' | 'overlay' | 'transition'>;

export type VantDialogOptions = {
    /**
     * 内容对齐方式
     *
     * @default 'center'
     */
    messageAlign?: VantDialogProps['message-align'];

    /**
     * `z-index`层级
     *
     * @default 100
     */
    zIndex?: VantDialogProps['z-index'];

    /**
     * 自定义类名，`dialog` 在自定义组件内时无效
     *
     * @default ''
     */
    className?: VantDialogProps['class-name'];

    /**
     * 自定义样式
     *
     * @default ''
     */
    customStyle?: VantDialogProps['custom-style'];

    /**
     * 自定义选择器
     *
     * @default 'van-dialog'
     */
    selector?: string;

    /**
     * 是否展示确认按钮
     *
     * @default true
     */
    showConfirmButton?: VantDialogProps['show-confirm-button'];

    /**
     * 是否展示取消按钮
     *
     * @default false
     */
    showCancelButton?: VantDialogProps['show-cancel-button'];

    /**
     * 确认按钮的文案
     *
     * @default '确认'
     */
    confirmButtonText?: VantDialogProps['confirm-button-text'];

    /**
     * 取消按钮的文案
     *
     * @default '取消'
     */
    cancelButtonText?: VantDialogProps['cancel-button-text'];

    /**
     * 自定义遮罩层样式
     */
    overlayStyle?: VantDialogProps['overlay-style'];

    /**
     * 点击遮罩层时是否关闭弹窗
     *
     * @default false
     */
    closeOnClickOverlay?: VantDialogProps['close-on-click-overlay'];

    /**
     * 已废弃，将在 `2.0.0` 移除，请使用 `beforeClose` 属性代替
     *
     * @deprecated
     *
     * @default false
     */
    asyncClose?: VantDialogProps['async-close'];

    /**
     * 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 `Promise`
     */
    beforeClose?: VantDialogProps['before-close'];

    /**
     * 选择器的选择范围，可以传入自定义组件的 `this` 作为上下文
     *
     * @default 当前页面
     */
    context?: object;

    /**
     * 确认按钮的微信开放能力，具体支持可参考 微信官方文档
     */
    confirmButtonOpenType?: VantDialogProps['confirm-button-open-type'];
} & VantDialogCommonProps;

export interface VantDialogInstance {
    /**
     * 展示弹窗
     */
    (options: VantDialogOptions): Promise<void>;

    /**
     * 展示消息提示弹窗
     */
    alert(options: VantDialogOptions): Promise<void>;

    /**
     * 展示消息确认弹窗
     */
    confirm(options: VantDialogOptions): Promise<void>;

    /**
     * 修改默认配置，对所有 `Dialog` 生效
     */
    setDefaultOptions(options: VantDialogOptions): void;

    /**
     * 重置默认配置，对所有 `Dialog` 生效
     */
    resetDefaultOptions(): void;

    /**
     * 关闭弹窗
     */
    close(): void;

    /**
     * 停止按钮的加载状态
     */
    stopLoading(): void;
}
