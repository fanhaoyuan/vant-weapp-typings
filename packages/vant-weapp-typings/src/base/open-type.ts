export type WechatOpenType =
    /**
     * 打开客服会话，如果用户在会话中点击消息卡片后返回小程序
     *
     * 可以从 `bindcontact` 回调中获得具体信息
     *
     * [具体说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/customer-message.html)
     *
     * （*小程序插件中不能使用*）
     */
    | 'contact'

    /**
     * 触发用户转发
     *
     * 使用前建议先阅读[使用指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#使用指引)
     */
    | 'share'

    /**
     * 获取用户手机号
     *
     * 可以从 `bindgetphonenumber` 回调中获取到用户信息
     *
     * [具体说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)
     *
     * （*小程序插件中不能使用*）
     */
    | 'getPhoneNumber'

    /**
     * 获取用户信息
     *
     * 可以从 `bindgetuserinfo` 回调中获取到用户信息
     *
     * （*小程序插件中不能使用*）
     */
    | 'getUserInfo'

    /**
     * 打开 `APP`
     *
     * 以通过 `app-parameter` 属性设定向APP传的参数[具体说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html)
     */
    | 'launchApp'

    /**
     * 打开授权设置页
     */
    | 'openSetting'

    /**
     * 打开“意见反馈”页面
     *
     * 用户可提交反馈内容并上传[日志](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html)
     *
     * 开发者可以登录小程序[管理后台](https://mp.weixin.qq.com)后进入左侧菜单“客服反馈”页面获取到反馈内容
     */
    | 'feedback'

    /**
     * 获取用户头像，可以从 `bindchooseavatar` 回调中获取到头像信息
     */
    | 'chooseAvatar';

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
    'bind:getuserinfo'?: (event: WechatMiniprogram.ButtonGetUserInfo) => void;

    /**
     * 客服消息回调
     */
    'bind:contact'?: (event: WechatMiniprogram.ButtonContact) => void;
    /**
     * 获取用户手机号回调
     */
    'bind:getphonenumber'?: (event: WechatMiniprogram.ButtonGetPhoneNumber) => void;

    /**
     * 当使用开放能力时，发生错误的回调
     */
    'bind:error'?: (event: WechatMiniprogram.ButtonError) => void;

    /**
     * 在打开授权设置页后回调
     */
    'bind:opensetting'?: (event: WechatMiniprogram.ButtonOpenSetting) => void;

    /**
     * 打开 APP 成功的回调
     *
     * `openType="launchApp"`时有效
     */
    'bind:launchapp'?: (event: WechatMiniprogram.ButtonLaunchApp) => void;
}
