import { VantComponent } from '../base';

export interface VantEmptyProps {
    /**
     * 图片类型，支持传入图片 URL
     *
     * @default 'default'
     */
    image?: 'default' | 'error' | 'network' | 'search' | string;

    /**
     * 图片下方的描述文字
     */
    description?: string;
}

export type VantEmpty = VantComponent<VantEmptyProps>;

declare const Empty: VantEmpty;

export default Empty;
