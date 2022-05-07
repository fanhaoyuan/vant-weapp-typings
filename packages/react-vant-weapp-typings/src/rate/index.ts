import {
    VantRate,
    VantRateEvents,
    VantRateExternalClassName,
    VantRateProps,
    VantRateChangeEvent,
} from 'vant-weapp-typings';

type Rate = React.ComponentType<VantRate>;

export { VantRate, VantRateEvents, VantRateExternalClassName, VantRateProps, VantRateChangeEvent };

declare const Rate: Rate;

export default Rate;
