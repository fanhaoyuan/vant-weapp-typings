export interface VantLoadingProps {
    /**
     * 颜色
     *
     * @default '#c9c9c9'
     */
    color?: string;

    /**
     * 类型
     *
     * @default 'circular'
     */
    type?: 'spinner' | 'circular';

    /**
     * 加载图标大小，默认单位为 `px`
     *
     * @default '30px'
     */
    size?: string | number;

    /**
     * 文字大小，默认单位为为 `px`
     *
     * @version `v1.0.0`
     *
     * @default '14px'
     */
    'text-size'?: string | number;

    /**
     * 是否垂直排列图标和文字内容
     *
     * @version `v1.0.0`
     *
     * @default false
     */
    vertical?: boolean;
}
