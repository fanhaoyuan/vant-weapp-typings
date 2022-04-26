import {
    VantSidebarItem,
    VantSidebarItemEvents,
    VantSidebarItemExternalClassName,
    VantSidebarItemProps,
} from 'vant-weapp-typings';

type SidebarItem = React.ComponentType<VantSidebarItem>;

export { VantSidebarItem, VantSidebarItemEvents, VantSidebarItemExternalClassName, VantSidebarItemProps };

declare const SidebarItem: SidebarItem;

export default SidebarItem;
