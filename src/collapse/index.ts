import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantCollapseProps {
    /**
     * 当前展开面板的 `name`
     *
     * 非手风琴模式：`(string | number)[]`
     *
     * 手风琴模式：`string | number`
     */
    value?: string | number | (string | number)[];

    /**
     * 是否开启手风琴模式
     *
     * @default false
     */
    accordion?: boolean;

    /**
     * 是否显示外边框
     *
     * @default true
     */
    border?: boolean;
}

export interface VantCollapseEvents {
    /**
     * 切换面板时触发
     */
    'bind:change'?: WechatMiniprogram.EventCallback;

    /**
     * 展开面板时触发
     */
    'bind:open'?: WechatMiniprogram.EventCallback;

    /**
     * 关闭面板时触发
     */
    'bind:close'?: WechatMiniprogram.EventCallback;
}

export type VantCollapseExternalClassName = VantBaseExternalClassName;

export type VantCollapse = VantComponent<VantCollapseProps, VantCollapseEvents, VantCollapseExternalClassName>;
