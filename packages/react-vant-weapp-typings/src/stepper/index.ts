import {
    VantStepper,
    VantStepperEvents,
    VantStepperProps,
    VantStepperExternalClassName,
    VantStepperChangeEvent,
    VantStepperOverLimitEvent,
    VantStepperBlurEventDetail,
    VantStepperFocusEventDetail,
} from 'vant-weapp-typings';

type Stepper = React.ComponentType<VantStepper>;

export {
    VantStepper,
    VantStepperEvents,
    VantStepperExternalClassName,
    VantStepperProps,
    VantStepperChangeEvent,
    VantStepperOverLimitEvent,
    VantStepperBlurEventDetail,
    VantStepperFocusEventDetail,
};

declare const Stepper: Stepper;

export default Stepper;
