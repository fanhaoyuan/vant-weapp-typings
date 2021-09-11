export interface VantImageProps {
    /**
     * 图片链接
     */
    src?: string;

    /**
     * 图片填充模式
     *
     * `contain` 保持宽高缩放图片，使图片的长边能完全显示出来
     *
     * `cover` 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边
     *
     * `fill`拉伸图片，使图片填满元素
     *
     * `widthFix`缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
     *
     * `heightFix` 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
     *
     * `none` 保持图片原有尺寸
     *
     * @default 'fill'
     */
    fit?: 'contain' | 'cover' | 'fill' | 'widthFix' | 'heightFix' | 'none';

    /**
     * 替代文本
     */
    alt?: string;

    /**
     * 宽度，默认单位为px
     */
    width?: string | number;

    /**
     * 高度，默认单位为px
     */
    height?: string | number;

    /**
     * 圆角大小，默认单位为px
     *
     * @default 0
     */
    radius?: string | number;

    /**
     * 是否显示为圆形
     *
     * @default false
     */
    round?: boolean;
    /**
     * 是否懒加载
     *
     * @default false
     */
    'lazy-load'?: boolean;
    /**
     * 是否展示图片加载失败提示
     *
     * @default true
     */
    'show-error'?: boolean;
    /**
     * 是否展示图片加载中提示
     *
     * @default true
     */
    'show-loading'?: boolean;

    /**
     * 是否使用`error`插槽
     *
     * @default false
     */
    'use-error-slot'?: boolean;

    /**
     * 是否使用`loading`插槽
     *
     * @default false
     */
    'use-loading-slot'?: boolean;

    /**
     * 是否开启长按图片显示识别小程序码菜单
     *
     * @default false
     */
    'show-menu-by-longpress'?: boolean;
}

export interface VantImageEvents {
    /**
     * 点击图片时触发
     */
    click: (e: WechatMiniprogram.BaseEvent) => void;

    /**
     * 图片加载完毕时触发
     */
    load: (e: WechatMiniprogram.BaseEvent) => void;

    /**
     * 图片加载失败时触发
     */
    error: (e: WechatMiniprogram.BaseEvent) => void;
}