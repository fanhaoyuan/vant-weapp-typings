import {
    VantSidebarItem,
    VantSidebarItemEvents,
    VantSidebarItemExternalClassName,
    VantSidebarItemProps,
    VantSidebarItemClickEvent,
} from 'vant-weapp-typings';

type SidebarItem = React.ComponentType<VantSidebarItem>;

export {
    VantSidebarItem,
    VantSidebarItemEvents,
    VantSidebarItemExternalClassName,
    VantSidebarItemProps,
    VantSidebarItemClickEvent,
};

declare const SidebarItem: SidebarItem;

export default SidebarItem;
