import { VantComponent } from '../base';

export interface VantUploaderProps {
    /**
     * 标识符，可以在回调函数的第二项参数中获取
     */
    name?: string | number;

    /**
     * 接受的文件类型
     *
     * @default 'image'
     */
    accept?: 'all' | 'media' | 'image' | 'file' | 'video';

    /**
     * 所选的图片的尺寸, 当`accept`为`image`类型时设置所选图片的尺寸
     *
     * @default ['original','compressed']
     */
    sizeType?: ('original' | 'compressed')[];

    /**
     * 预览图和上传区域的尺寸，默认单位为`px`
     *
     * @default '80px'
     */
    'preview-size'?: string | number;

    /**
     * 是否在上传完成后展示预览图
     *
     * @default true
     */
    'preview-image'?: boolean;

    /**
     * 是否在点击预览图后展示全屏图片预览
     *
     * @default true
     */
    'preview-full-image'?: boolean;

    /**
     * 是否开启图片多选，部分安卓机型不支持
     *
     * @default false
     */
    multiple?: boolean;

    /**
     * 是否禁用文件上传
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否展示文件上传按钮
     *
     * @default true
     */
    'show-upload'?: boolean;

    /**
     * 是否展示删除按钮
     *
     * @default true
     */
    deletable?: boolean;

    /**
     * 图片或者视频选取模式，当`accept`为`image`类型时设置`capture`可选值为`camera`可以直接调起摄像头
     *
     * @default ['album','camera']
     */
    capture?: ('album' | 'camera') | ('album' | 'camera')[];

    /**
     * 文件大小限制，单位为`byte`
     */
    'max-size'?: number;

    /**
     * 文件上传数量限制
     */
    'max-count'?: number;

    /**
     * 上传区域文字提示
     */
    'upload-text'?: string;

    /**
     * 预览图裁剪模式，可选值参考小程序`image`组件的`mode`属性
     *
     * @default 'scaleToFill'
     */
    'image-fit'?: string;

    /**
     * 是否开启文件读取前事件
     */
    'use-before-read'?: boolean;

    /**
     * 当`accept`为`video`时生效
     */
    camera?: 'back' | 'front';

    /**
     * 当`accept`为`video`时生效，是否压缩视频
     *
     * @default true
     */
    compressed?: boolean;

    /**
     * 当`accept`为 `video` 时生效，拍摄视频最长拍摄时间，单位秒
     */
    'max-duration'?: number;

    /**
     * 上传区域图标，可选值见 `Icon` 组件
     *
     * @default 'plus'
     */
    'upload-icon'?: string;
}

export interface VantUploaderEvents {
    /**
     * 文件读取前，在回调函数中返回 `false` 可终止文件读取，绑定事件的同时需要将`use-before-read`属性设置为`true`
     */
    'bind:before-read'?: WechatMiniprogram.EventCallback;

    /**
     * 文件读取完成后触发
     */
    'bind:after-read'?: WechatMiniprogram.EventCallback;

    /**
     * 文件超出大小限制
     */
    'bind:oversize'?: WechatMiniprogram.EventCallback;

    /**
     * 点击预览图片
     */
    'bind:click-preview'?: WechatMiniprogram.EventCallback;

    /**
     * 删除图片
     */
    'bind:delete'?: WechatMiniprogram.EventCallback;
}

export type VantUploader = VantComponent<VantUploaderProps, VantUploaderEvents>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const Uploader: VantUploader;

export default Uploader;
