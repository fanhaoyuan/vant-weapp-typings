import {
    VantField,
    VantFieldEvents,
    VantFieldExternalClassName,
    VantFieldProps,
    VantFieldInputEvent,
    VantFieldBlurEventDetail,
    VantFieldFocusEventDetail,
    VantFieldKeyboardHeightChangeEventDetail,
    VantFieldLineChangeEventDetail,
} from 'vant-weapp-typings';

type Field = React.ComponentType<VantField>;

export {
    VantField,
    VantFieldEvents,
    VantFieldExternalClassName,
    VantFieldProps,
    VantFieldInputEvent,
    VantFieldBlurEventDetail,
    VantFieldFocusEventDetail,
    VantFieldKeyboardHeightChangeEventDetail,
    VantFieldLineChangeEventDetail,
};

declare const Field: Field;

export default Field;
