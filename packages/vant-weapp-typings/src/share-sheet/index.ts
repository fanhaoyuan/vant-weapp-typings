import { VantComponent } from '../base';

export interface VantShareSheetOption {
    /**
     * 分享渠道名称
     */
    name?: string;

    /**
     * 分享选项描述
     */
    description?: string;

    /**
     * 图标, 支持传入图片 `URL`
     *
     * 可选项: `'qq' | 'link' | 'weibo' | 'wechat' | 'poster' | 'qrcode' | 'weapp-qrcode' | 'wechat-moments'`
     */
    icon?: 'qq' | 'link' | 'weibo' | 'wechat' | 'poster' | 'qrcode' | 'weapp-qrcode' | 'wechat-moments' | string;

    /**
     * 按钮 `open-type`，可用于实现分享功能
     */
    openType?: 'share';
}

export interface VantShareSheetProps {
    /**
     * 是否显示分享面板
     *
     * @default false
     */
    show?: boolean;

    /**
     * 分享选项
     *
     * @default []
     */
    options?: VantShareSheetOption[];

    /**
     * 顶部标题
     */
    title?: string;

    /**
     * 取消按钮文字
     *
     * @default '取消'
     */
    'cancel-text'?: string;

    /**
     * 标题下方的辅助描述文字
     */
    description?: string;

    /**
     * 动画时长，单位毫秒
     *
     * @default 300
     */
    duration?: number | string;

    /**
     * 是否显示遮罩层
     *
     * @default true
     */
    overlay?: boolean;

    /**
     * 是否在点击遮罩层后关闭
     *
     * @default true
     */
    'close-on-click-overlay'?: boolean;

    /**
     * 是否开启底部安全区适配
     *
     * @default true
     */
    'safe-area-inset-bottom'?: boolean;
}

export interface VantShareSheetEvents {
    /**
     * 点击分享选项时触发
     */
    select?: (option?: VantShareSheetOption, index?: number) => void;

    /**
     * 关闭时触发
     */
    close?: WechatMiniprogram.EventCallback;

    /**
     * 点击取消按钮时触发
     */
    cancel?: WechatMiniprogram.EventCallback;

    /**
     * 点击遮罩层时触发
     */
    'click-overlay'?: WechatMiniprogram.EventCallback;
}

export type VantShareSheet = VantComponent<VantShareSheetProps, VantShareSheetEvents>;
