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
    change?: (activeNames?: string | string[]) => void;

    /**
     * 展开面板时触发
     */
    open?: (currentName?: string | number) => void;

    /**
     * 关闭面板时触发
     */
    close?: (currentName?: string | number) => void;
}
