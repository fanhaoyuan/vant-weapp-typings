import {
    VantDropdownItem,
    VantDropdownItemEvents,
    VantDropdownItemOption,
    VantDropdownItemProps,
} from 'vant-weapp-typings';

type DropdownItem = React.ComponentType<VantDropdownItem>;

export { VantDropdownItem, VantDropdownItemEvents, VantDropdownItemOption, VantDropdownItemProps };

declare const DropdownItem: DropdownItem;

export default DropdownItem;
