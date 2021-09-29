import { VantBaseExternalClassName, VantComponent } from '../base';

export interface VantSidebarProps {
    /**
     * 选中项的索引
     *
     * @default 0
     */
    activeKey?: string | number;
}

export interface VantSidebarEvents {
    /**
     * 切换徽章时触发
     */
    change?: (activeKey?: string | number) => void;
}

export type VantSidebarExternalClassName = VantBaseExternalClassName;

export type VantSidebar = VantComponent<VantSidebarProps, VantSidebarEvents, VantSidebarExternalClassName>;
