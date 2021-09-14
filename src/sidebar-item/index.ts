export interface VantSidebarItemProps {
    /**
     * 内容
     *
     * @default ''
     */
    title?: string;

    /**
     * 是否显示右上角小红点
     *
     * @default false
     */
    dot?: boolean;

    /**
     * 图标右上角徽标的内容
     *
     * @deprecated 已废弃，请使用 `badge` 属性
     *
     * @default ''
     */
    info?: string | number;

    /**
     * 图标右上角徽标的内容
     *
     * @version `v1.5.0`
     *
     * @default ''
     */
    badge?: string | number;

    /**
     * 是否禁用该项
     *
     * @default false
     */
    disabled?: boolean;
}

export interface VantSidebarItemEvents {
    /**
     * 点击徽章时触发
     */
    click?: WechatMiniprogram.EventCallback;
}
