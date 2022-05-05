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

export interface VantCollapseBaseEvent extends WechatMiniprogram.BaseEvent {
    /**
     * 当前打开的面板 name
     */
    detail: string;
}

export interface VantCollapseChangeEvent extends WechatMiniprogram.BaseEvent {
    /**
     * 手风琴模式时，为 name
     *
     * 非手风琴模式时，为打开的折叠面板的 name 数组
     */
    detail: string | string[];
}

export interface VantCollapseEvents {
    /**
     * 切换面板时触发
     */
    'bind:change'?: (event: VantCollapseChangeEvent) => void;

    /**
     * 展开面板时触发
     */
    'bind:open'?: (event: VantCollapseBaseEvent) => void;

    /**
     * 关闭面板时触发
     */
    'bind:close'?: (event: VantCollapseBaseEvent) => void;
}

export type VantCollapseExternalClassName = VantBaseExternalClassName;

export type VantCollapse = VantComponent<VantCollapseProps, VantCollapseEvents, VantCollapseExternalClassName>;
