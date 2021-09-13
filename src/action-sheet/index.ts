export interface VantAction {
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
    openType?: string;

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
     * 会话来源，`openType="contact"`时有效
     */
    sessionFrom?: string;

    /**
     * 会话内消息卡片标题，`openType="contact"`时有效
     *
     * @default 当前标题
     */
    sendMessageTitle?: string;

    /**
     * 会话内消息卡片点击跳转小程序路径，`openType="contact"`时有效
     *
     * @default 当前分享路径
     */
    sendMessagePath?: string;

    /**
     * 会话内消息卡片图片，openType="contact"时有效
     *
     * @default 截图
     */
    sendMessageImg?: string;

    /**
     * 是否显示会话内消息卡片，设置此参数为`true`，
     * 用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
     * 用户点击后可以快速发送小程序消息，`openType="contact"`时有效
     *
     * @default false
     */
    showMessageCard?: string;

    /**
     * 打开 `APP` 时，向 `APP` 传递的参数，`openType=launchApp`时有效
     */
    appParameter?: string;
}

export interface VantActionSheetProps {
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

export interface VantActionSheetEvents {
    /**
     * 选中选项时触发，禁用或加载状态下不会触发
     */
    'bind:select'?: WechatMiniprogram.EventCallback;

    /**
     * 关闭时触发
     */
    'bind:close'?: WechatMiniprogram.EventCallback;

    /**
     * 取消按钮点击时触发
     */
    'bind:cancel'?: WechatMiniprogram.EventCallback;

    /**
     * 点击遮罩层时触发
     */
    'bind:click-overlay'?: WechatMiniprogram.EventCallback;

    /**
     * 用户点击该按钮时，会返回获取到的用户信息，
     * 从返回参数的`detail`中获取到的值同`wx.getUserInfo`
     *
     * `openType="getUserInfo"`时有效
     */
    'bind:getuserinfo'?: WechatMiniprogram.GetUserInfoSuccessCallback;

    /**
     * 客服消息回调
     *
     * `openType="contact"`时有效
     */
    'bind:contact'?: (e: WechatMiniprogram.ButtonContact) => void;

    /**
     * 获取用户手机号回调
     *
     * `openType="getPhoneNumber"`时有效
     */
    'bind:getphonenumber'?: (e: WechatMiniprogram.ButtonGetPhoneNumber) => void;

    /**
     * 当使用开放能力时，发生错误的回调
     *
     * 当使用开放能力时，发生错误的回调，`openType="launchApp"`时有效
     */
    'bind:error'?: WechatMiniprogram.EventCallback;

    /**
     * 打开 APP 成功的回调
     *
     * `openType="launchApp"`时有效
     */
    'bind:launchapp'?: WechatMiniprogram.EventCallback;

    /**
     * 在打开授权设置页后回调
     *
     * 在打开授权设置页后回调，`openType="openSetting"`时有效
     */
    'bind:opensetting'?: WechatMiniprogram.OpenSettingSuccessCallback;
}
