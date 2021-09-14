import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantColProps {
    /**
     * 列元素宽度
     */
    span?: string | number;

    /**
     * 列元素偏移距离
     */
    offset?: string | number;
}

export type VantColExternalClassName = VantBaseExternalClassName;

export type VantCol = VantComponent<VantColProps, {}, VantColExternalClassName>;

declare const Col: VantCol;

export default Col;
