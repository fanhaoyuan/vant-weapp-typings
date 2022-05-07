import {
    VantStepper,
    VantStepperEvents,
    VantStepperProps,
    VantStepperExternalClassName,
    VantStepperChangeEvent,
    VantStepperOverLimitEvent,
} from 'vant-weapp-typings';

type Stepper = React.ComponentType<VantStepper>;

export {
    VantStepper,
    VantStepperEvents,
    VantStepperExternalClassName,
    VantStepperProps,
    VantStepperChangeEvent,
    VantStepperOverLimitEvent,
};

declare const Stepper: Stepper;

export default Stepper;
