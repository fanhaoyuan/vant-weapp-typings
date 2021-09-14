import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantRowProps {
    /**
     * 列元素之间的间距（单位为 px）
     */
    gutter?: string | number;
}

export type VantRowExternalClassName = VantBaseExternalClassName;

export type VantRow = VantComponent<VantRowProps, {}, VantRowExternalClassName>;

declare const Row: VantRow;

export default Row;
