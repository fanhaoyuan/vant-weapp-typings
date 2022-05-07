import {
    VantSearch,
    VantSearchEvents,
    VantSearchExternalClassName,
    VantSearchProps,
    VantSearchBaseEvent,
} from 'vant-weapp-typings';

type Search = React.ComponentType<VantSearch>;

export { VantSearch, VantSearchEvents, VantSearchExternalClassName, VantSearchProps, VantSearchBaseEvent };

declare const Search: Search;

export default Search;
