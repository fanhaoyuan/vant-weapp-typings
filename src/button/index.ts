export interface VantButtonProps {
	/**标识符 */
	id?: string;

	/**
	 * 按钮类型
	 *
	 * @default 'default'
	 */
	type?: "primary" | "info" | "warning" | "danger";

	/**
	 * 按钮尺寸
	 *
	 * @default 'normal'
	 */
	size?: "normal" | "large" | "small" | "mini";

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
	"class-prefix"?: string;

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
	"loading-text"?: string;

	/**
	 * 加载状态图标类型
	 *
	 * @default 'circular'
	 */
	"loading-type"?: "spinner" | "circular";

	/**
	 * 加载图标大小
	 *
	 * @default 20px
	 */
	"loading-size"?: string;

	/**
	 * 自定义样式
	 */
	"custom-style"?: string;

	/**
	 * 微信开放能力，具体支持可参考微信官方文档
	 *
	 * {@link https://developers.weixin.qq.com/miniprogram/dev/component/button.html}
	 */
	"open-type"?: string;

	/**
	 * 打开`APP`时，向`APP`传递的参数
	 */
	"app-parameter"?: string;

	/**
	 * 指定返回用户信息的语言
	 *
	 * `zh_CN` --简体中文
	 * `zh_TW` -- 繁体中文
	 * `en` -- 英文
	 * @default 'en'
	 */
	lang?: "zh_CN" | "zh_TW" | "en";

	/**
	 * 会话来源
	 */
	"session-from"?: string;

	/**
	 * 客服消息子商户`id`
	 */
	"business-id"?: number;

	/**
	 * 会话内消息卡片标题
	 *
	 * @default 当前标题
	 */
	"send-message-title"?: string;

	/**
	 * 会话内消息卡片点击跳转小程序路径
	 *
	 * @default 当前分享路径
	 */
	"send-message-path"?: string;

	/**
	 * sendMessageImg
	 *
	 * @default 截图
	 */
	"send-message-img"?: string;

	/**
	 * 显示会话内消息卡片
	 *
	 * @default false
	 */
	"show-message-card"?: string;
	/**
	 * 按钮`dataset`，`open-type`为`share`时，
	 * 可在`onShareAppMessage`事件的`event.target.dataset.detail`中看到传入的值
	 */
	dataset?: any;

	/**
	 * 用于`form`组件，可选值为`submit` `reset`，
	 * 点击分别会触发`form`组件的`submit/reset`事件
	 */
	"form-type"?: string;
}

export interface VantButtonEvents {
	/**
	 * 点击按钮，且按钮状态不为加载或禁用时触发
	 */
	"bind:click"?: WechatMiniprogram.EventCallback;

	/**
	 * 用户点击该按钮时，会返回获取到的用户信息，
	 * 从返回参数的`detail`中获取到的值同`wx.getUserInfo`
	 */
	"bind:getuserinfo"?: WechatMiniprogram.GetUserInfoSuccessCallback;

	/**
	 * 客服消息回调
	 */
	"bind:contact"?: (e: WechatMiniprogram.ButtonContact) => void;
	/**
	 * 获取用户手机号回调
	 */
	"bind:getphonenumber"?: (e: WechatMiniprogram.ButtonGetPhoneNumber) => void;

	/**
	 * 当使用开放能力时，发生错误的回调
	 */
	"bind:error"?: WechatMiniprogram.EventCallback;

	/**
	 * 在打开授权设置页后回调
	 */
	"bind:opensetting"?: WechatMiniprogram.OpenSettingSuccessCallback;
}
