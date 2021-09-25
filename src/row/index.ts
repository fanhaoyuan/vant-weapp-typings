import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantRowProps {
    /**
     * 列元素之间的间距（单位为 px）
     */
    gutter?: string | number;
}

export type VantRowExternalClassName = VantBaseExternalClassName;

export type VantRow = VantComponent<VantRowProps, {}, VantRowExternalClassName>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const Row: VantRow;

export default Row;
