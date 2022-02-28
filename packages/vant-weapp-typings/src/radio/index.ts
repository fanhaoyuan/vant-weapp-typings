import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantRadioProps {
    /**
     * 标识符
     */
    name?: string;

    /**
     * 形状
     */
    shape?: 'square' | 'round';

    /**
     * 是否为禁用状态
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否禁用文本内容点击
     *
     * @default false
     */
    'label-disabled'?: boolean;

    /**
     * 文本位置
     */
    'label-position'?: 'left' | 'right';

    /**
     * 图标大小，默认单位为`px`
     *
     * @default '20px'
     */
    'icon-size'?: string | number;

    /**
     * 选中状态颜色
     *
     * @default '#1989fa'
     */
    'checked-color'?: string;

    /**
     * 是否使用`icon`插槽
     *
     * @default false
     */
    'use-icon-slot'?: boolean;
}

export interface VantRadioEvents {
    /**
     * 当绑定值变化时触发的事件
     */
    'bind:change'?: (name?: string) => void;
}

export interface VantRadioExternalClassName extends VantBaseExternalClassName {
    /**
     * 图标样式类
     */
    'icon-class'?: string;

    /**
     * 描述信息样式类
     */
    'label-class'?: string;
}

export type VantRadio = VantComponent<VantRadioProps, VantRadioEvents, VantRadioExternalClassName>;
