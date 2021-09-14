import { VantComponent } from '../base';

export interface VantDividerProps {
    /**
     * 虚线
     *
     * @default false
     */
    dashed?: boolean;

    /**
     * 细线
     *
     * @default false
     */
    hairline?: boolean;

    /**
     * 文本位置
     */
    'content-position'?: 'left' | 'center' | 'right';

    /**
     * 自定义样式
     */
    'custom-style'?: string;
}

export type VantDivider = VantComponent<VantDividerProps>;

declare const Divider: VantDivider;

export default Divider;
