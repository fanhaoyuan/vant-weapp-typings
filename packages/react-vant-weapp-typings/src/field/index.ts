import {
    VantField,
    VantFieldEvents,
    VantFieldExternalClassName,
    VantFieldProps,
    VantFieldInputEvent,
} from 'vant-weapp-typings';

type Field = React.ComponentType<VantField>;

export { VantField, VantFieldEvents, VantFieldExternalClassName, VantFieldProps, VantFieldInputEvent };

declare const Field: Field;

export default Field;
