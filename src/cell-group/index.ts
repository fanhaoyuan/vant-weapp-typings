import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantCellGroupProps {
    /**
     * 分组标题
     */
    title?: string;

    /**
     * 是否展示为圆角卡片风格
     *
     * @default false
     */
    inset?: boolean;

    /**
     * 是否显示外边框
     *
     * @default true
     */
    border?: boolean;
}

export type VantCellGroupExternalClassName = VantBaseExternalClassName;

export type VantCellGroup = VantComponent<VantCellGroupProps, {}, VantCellGroupExternalClassName>;

declare const CellGroup: VantCellGroup;

export default CellGroup;
