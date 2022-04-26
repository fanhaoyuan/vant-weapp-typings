import {
    VantPicker,
    VantPickerEvents,
    VantPickerExternalClassName,
    VantPickerMultipleColumn,
    VantPickerProps,
    VantPickerSingleColumn,
} from 'vant-weapp-typings';

type Picker = React.ComponentType<VantPicker>;

export {
    VantPicker,
    VantPickerEvents,
    VantPickerExternalClassName,
    VantPickerSingleColumn,
    VantPickerMultipleColumn,
    VantPickerProps,
};

declare const Picker: Picker;

export default Picker;
