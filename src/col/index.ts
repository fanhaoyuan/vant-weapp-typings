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

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const Col: VantCol;

export default Col;
