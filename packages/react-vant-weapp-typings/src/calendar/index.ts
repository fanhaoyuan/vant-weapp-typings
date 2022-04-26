import {
    VantCalendar,
    VantCalendarProps,
    VantCalendarEvents,
    VantCalendarRangeProps,
    VantCalendarPoppableProps,
    Day,
} from 'vant-weapp-typings';

type Calendar = React.ComponentType<VantCalendar>;

export { VantCalendar, VantCalendarEvents, VantCalendarPoppableProps, VantCalendarProps, VantCalendarRangeProps, Day };

declare const Calendar: Calendar;

export default Calendar;
