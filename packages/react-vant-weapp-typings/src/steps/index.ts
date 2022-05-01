import {
    VantSteps,
    VantStepsEvents,
    VantStepsProps,
    VantStepsExternalClassName,
    VantStepsOption,
    VantStepsClickStepEvent,
} from 'vant-weapp-typings';

type Steps = React.ComponentType<VantSteps>;

export {
    VantSteps,
    VantStepsEvents,
    VantStepsExternalClassName,
    VantStepsProps,
    VantStepsOption,
    VantStepsClickStepEvent,
};

declare const Steps: Steps;

export default Steps;
