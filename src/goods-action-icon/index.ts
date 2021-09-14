export interface VantGoodsActionIconProps {
    /**
     * 按钮文字
     */
    text?: string;

    /**
     * 图标类型，可选值见`icon`组件
     */
    icon?: string;

    /**
     * 图标右上角提示信息
     */
    info?: string | number;

    /**
     * 点击后跳转的链接地址
     */
    url?: string;

    /**
     * 链接跳转类型
     *
     * @default 'navigateTo'
     */
    'link-type'?: 'redirectTo' | 'switchTab' | 'reLaunch';

    /**
     * 标识符
     */
    id?: string;

    /**
     * 是否禁用按钮
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否显示为加载状态
     *
     * @default false
     */
    loading?: boolean;

    /**
     * 微信开放能力，具体支持可参考 微信官方文档
     */
    'open-type'?: string;

    /**
     * 打开 `APP` 时，向 `APP` 传递的参数
     */
    'app-parameter'?: string;

    /**
     * 指定返回用户信息的语言
     *
     * `zh_CN` 简体中文
     *
     * `zh_TW` 繁体中文
     *
     * `en` 英文
     *
     * @default 'en'
     */
    lang?: 'zh_CN' | 'zh_TW' | 'en';

    /**
     * 会话来源
     */
    'session-from'?: string;

    /**
     * 会话内消息卡片标题
     *
     * @default 当前标题
     */
    'send-message-title'?: string;

    /**
     * 会话内消息卡片点击跳转小程序路径
     *
     * @default 当前分享路径
     */
    'send-message-path'?: string;

    /**
     * sendMessageImg
     *
     * @default 截图
     */
    'send-message-img'?: string;

    /**
     * 显示会话内消息卡片
     *
     * @default false
     */
    'show-message-card'?: string;
}
