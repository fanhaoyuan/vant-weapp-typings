import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantTagProps {
    /**
     * 类型
     */
    type?: 'primary' | 'success' | 'danger' | 'warning';

    /**
     * 大小
     */
    size?: 'large' | 'medium';

    /**
     * 标签颜色
     */
    color?: string;

    /**
     * 是否为空心样式
     *
     * @default false
     */
    plain?: boolean;

    /**
     * 是否为圆角样式
     *
     * @default false
     */
    round?: boolean;

    /**
     * 是否为标记样式
     *
     * @default false
     */
    mark?: boolean;

    /**
     * 文本颜色，优先级高于 `color` 属性
     *
     * @default 'white'
     */
    'text-color'?: string;

    /**
     * 是否为可关闭标签
     *
     * @default false
     */
    closeable?: boolean;
}

export interface VantTagEvents {
    'bind:close'?: (event: WechatMiniprogram.BaseEvent) => void;
}

export type VantTagExternalClassName = VantBaseExternalClassName;

export type VantTag = VantComponent<VantTagProps, VantTagEvents, VantTagExternalClassName>;
