import {
    VantUploader,
    VantUploaderEvents,
    VantUploaderProps,
    VantUploaderBaseReadEventDetail,
    VantUploaderBeforeReadEventDetail,
    VantUploaderFile,
    VantUploaderIndexDetail,
} from 'vant-weapp-typings';

type Uploader = React.ComponentType<VantUploader>;

export {
    VantUploader,
    VantUploaderEvents,
    VantUploaderProps,
    VantUploaderBaseReadEventDetail,
    VantUploaderBeforeReadEventDetail,
    VantUploaderFile,
    VantUploaderIndexDetail,
};

declare const Uploader: Uploader;

export default Uploader;
