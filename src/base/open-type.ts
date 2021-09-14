export interface VantOpenTypeProps {
    /**
     * 打开 `APP` 时，向 `APP` 传递的参数
     *
     * @requires `'launchApp'`
     */
    'app-parameter'?: string;

    /**
     * 指定返回用户信息的语言
     *
     * @requires `'getUserInfo'`
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
     *
     * @requires `'contact'`
     */
    'session-from'?: string;

    /**
     * 客服消息子商户 `id`
     *
     * @requires `'contact'`
     */
    'business-id'?: number;

    /**
     * 会话内消息卡片标题
     *
     * @requires `'contact'`
     *
     * @default 当前标题
     */
    'send-message-title'?: string;

    /**
     * 会话内消息卡片点击跳转小程序路径
     *
     * @requires `'contact'`
     *
     * @default 当前分享路径
     */
    'send-message-path'?: string;

    /**
     * sendMessageImg
     *
     * @requires `'contact'`
     *
     * @default '截图'
     */
    'send-message-img'?: string;

    /**
     * 显示会话内消息卡片
     *
     * @requires `'contact'`
     *
     * @default false
     */
    'show-message-card'?: string;
}

export interface VantOpenTypeCamelCaseProps {
    appParameter?: VantOpenTypeProps['app-parameter'];
    lang?: VantOpenTypeProps['lang'];
    sessionFrom?: VantOpenTypeProps['session-from'];
    businessId?: VantOpenTypeProps['business-id'];
    sendMessageTitle?: VantOpenTypeProps['send-message-title'];
    sendMessagePath?: VantOpenTypeProps['send-message-path'];
    sendMessageImg?: VantOpenTypeProps['send-message-img'];
    showMessageCard?: VantOpenTypeProps['show-message-card'];
}

export interface VantOpenTypeEvents {
    /**
     * 用户点击该按钮时，会返回获取到的用户信息，
     * 从返回参数的`detail`中获取到的值同`wx.getUserInfo`
     */
    'bind:getuserinfo'?: WechatMiniprogram.GetUserInfoSuccessCallback;

    /**
     * 客服消息回调
     */
    'bind:contact'?: (e: WechatMiniprogram.ButtonContact) => void;
    /**
     * 获取用户手机号回调
     */
    'bind:getphonenumber'?: (e: WechatMiniprogram.ButtonGetPhoneNumber) => void;

    /**
     * 当使用开放能力时，发生错误的回调
     */
    'bind:error'?: WechatMiniprogram.EventCallback;

    /**
     * 在打开授权设置页后回调
     */
    'bind:opensetting'?: WechatMiniprogram.OpenSettingSuccessCallback;
}
