import {
    VantTransition,
    VantTransitionEvents,
    VantTransitionExternalClassName,
    VantTransitionProps,
} from 'vant-weapp-typings';

type Transition = React.ComponentType<VantTransition>;

export { VantTransition, VantTransitionEvents, VantTransitionExternalClassName, VantTransitionProps };

declare const Transition: Transition;

export default Transition;
