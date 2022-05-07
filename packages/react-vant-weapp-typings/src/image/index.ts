import {
    VantImage,
    VantImageEvents,
    VantImageExternalClassName,
    VantImageProps,
    VantImageErrorEventDetail,
    VantImageLoadEventDetail,
} from 'vant-weapp-typings';

type Image = React.ComponentType<VantImage>;

export {
    VantImage,
    VantImageEvents,
    VantImageExternalClassName,
    VantImageProps,
    VantImageErrorEventDetail,
    VantImageLoadEventDetail,
};

declare const Image: Image;

export default Image;
