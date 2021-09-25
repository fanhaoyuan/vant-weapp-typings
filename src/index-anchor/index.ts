import { VantComponent } from '../base';

export interface VantIndexAnchorProps {
    /**
     * 是否使用自定义内容的插槽
     *
     * @default false
     */
    'use-slot'?: boolean;

    /**
     * 索引字符
     */
    index?: string | number;
}

export type VantIndexAnchor = VantComponent<VantIndexAnchorProps>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const IndexAnchor: VantIndexAnchor;

export default IndexAnchor;
