export interface VantGoodsActionProps {
    /**
     * 是否为 `iPhoneX` 留出底部安全距离
     *
     * @default true
     */
    'safe-area-inset-bottom'?: boolean;
}

export interface VantGoodsActionEvents {
    /**
     * 按钮点击事件回调
     */
    click?: WechatMiniprogram.EventCallback;
}
