import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantPanelProps {
    /**
     * 标题
     */
    title?: string;

    /**
     * 描述
     */
    desc?: string;

    /**
     * 状态
     */
    status?: string;
}

export interface VantPanelExternalClassName extends VantBaseExternalClassName {
    /**
     * 头部样式类
     */
    'header-class'?: string;

    /**
     * 底部样式类
     */
    'footer-class'?: string;
}

export type VantPanel = VantComponent<VantPanelProps, {}, VantPanelExternalClassName>;
