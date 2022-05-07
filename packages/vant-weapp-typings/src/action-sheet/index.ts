import {
    VantOpenTypeCamelCaseProps,
    VantOpenTypeEvents,
    VantComponent,
    WechatOpenType,
    VantEventHandler,
} from '../base';

export interface VantAction extends Omit<VantOpenTypeCamelCaseProps, 'businessId'> {
    /**
     * 标题
     */
    name?: string;

    /**
     * 二级标题
     */
    subname?: string;

    /**
     * 选项文字颜色
     */
    color?: string;

    /**
     * 是否为加载状态
     */
    loading?: boolean;

    /**
     * 是否为禁用状态
     */
    disabled?: boolean;

    /**
     * 为对应列添加额外的 `class` 类名
     */
    className?: string;

    /**
     * 微信开放能力，具体支持可参考 微信官方文档
     */
    openType?: WechatOpenType;
}

export interface VantActionSheetProps {
    /**
     * 是否显示动作面板
     */
    show?: boolean;

    /**
     * 菜单选项
     *
     * @default []
     */
    actions?: VantAction[];

    /**
     * 标题
     */
    title?: string;

    /**
     * 选项上方的描述信息
     *
     * @version `v1.0.0`
     */
    description?: string;

    /**
     * `z-index` 层级
     *
     * @default 100
     */
    'z-index'?: number;

    /**
     * 取消按钮文字
     */
    'cancel-text'?: string;

    /**
     * 是否显示遮罩层
     */
    overlay?: boolean;

    /**
     * 是否显示圆角
     *
     * @version `v1.0.0`
     *
     * @default true
     */
    round?: boolean;

    /**
     * 是否在点击选项后关闭
     *
     * @default true
     */
    'close-on-click-action'?: boolean;

    /**
     * 点击遮罩是否关闭菜单
     */
    'close-on-click-overlay'?: boolean;

    /**
     * 是否为 `iPhoneX` 留出底部安全距离
     *
     * @default true
     */
    'safe-area-inset-bottom'?: boolean;
}

export interface VantActionSheetEvents extends Omit<VantOpenTypeEvents, 'bind:launchapp'> {
    /**
     * 选中选项时触发，禁用或加载状态下不会触发
     */
    'bind:select'?: VantEventHandler<VantAction>;

    /**
     * 关闭时触发
     */
    'bind:close'?: VantEventHandler;

    /**
     * 取消按钮点击时触发
     */
    'bind:cancel'?: VantEventHandler;

    /**
     * 点击遮罩层时触发
     */
    'bind:click-overlay'?: VantEventHandler;
}

export type VantActionSheet = VantComponent<VantActionSheetProps, VantActionSheetEvents>;
