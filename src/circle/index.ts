export interface VantCircleProps {
    /**
     * 目标进度
     *
     * @default 0
     */
    value?: number;

    /**
     * 指定`canvas`类型
     */
    type?: '2d';

    /**
     * 圆环直径，默认单位为 `px`
     *
     * @default 100
     */
    size?: number;

    /**
     * 进度条颜色，传入对象格式可以定义渐变色
     *
     * @default '#1989fa'
     */
    color?: string | Record<string, string>;

    /**
     * 轨道颜色
     *
     * @default '#fff'
     */
    'layer-color'?: string;

    /**
     * 填充颜色
     */
    fill?: string;

    /**
     * 动画速度（单位为 value/s）
     *
     * @default 50
     */
    speed?: number;

    /**
     * 文字
     */
    text?: string;

    /**
     * 进度条宽度
     *
     * @default 4
     */
    'stroke-width'?: number;

    /**
     * 是否顺时针增加
     *
     * @default true
     */
    clockwise?: boolean;
}
