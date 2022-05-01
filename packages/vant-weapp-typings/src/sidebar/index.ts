import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantSidebarProps {
    /**
     * 选中项的索引
     *
     * @default 0
     */
    activeKey?: string | number;
}

export interface VantSidebarChangeEvent extends WechatMiniprogram.BaseEvent {
    /**
     * 当前选中徽章的索引
     */
    detail: number;
}

export interface VantSidebarEvents {
    /**
     * 切换徽章时触发
     */
    'bind:change'?: (event: VantSidebarChangeEvent) => void;
}

export type VantSidebarExternalClassName = VantBaseExternalClassName;

export type VantSidebar = VantComponent<VantSidebarProps, VantSidebarEvents, VantSidebarExternalClassName>;
