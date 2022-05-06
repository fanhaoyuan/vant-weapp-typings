import {
    VantPicker,
    VantPickerEvents,
    VantPickerExternalClassName,
    VantPickerMultipleColumn,
    VantPickerProps,
    VantPickerSingleColumn,
    VantPickerBaseEventDetail,
    VantPickerChangeEventDetail,
} from 'vant-weapp-typings';

type Picker = React.ComponentType<VantPicker>;

export {
    VantPicker,
    VantPickerEvents,
    VantPickerExternalClassName,
    VantPickerSingleColumn,
    VantPickerMultipleColumn,
    VantPickerProps,
    VantPickerBaseEventDetail,
    VantPickerChangeEventDetail,
};

declare const Picker: Picker;

export default Picker;
