import { VantBaseExternalClassName } from '../base';

export interface VantCardProps {
    /**
     * 左侧图片
     */
    thumb?: string;

    /**
     * 左侧图片裁剪、缩放的模式，可选值参考小程序 `image` 组件 `mode` 属性值
     *
     * @default 'aspectFit'
     */
    'thumb-mode'?: string;

    /**
     * 标题
     */
    title?: string;

    /**
     * 描述
     */
    desc?: string;

    /**
     * 标签
     */
    tag?: string;

    /**
     * 商品数量
     */
    num?: string | number;

    /**
     * 商品价格
     */
    price?: string | number;

    /**
     * 商品划线原价
     */
    'origin-price'?: string | number;

    /**
     * 内容是否垂直居中
     *
     * @default false
     */
    centered?: string;

    /**
     * 货币符号
     *
     * @default '¥'
     */
    currency?: string;

    /**
     * 点击左侧图片后跳转的链接地址
     */
    'thumb-link'?: string;

    /**
     * 链接跳转类型
     *
     * @default 'navigateTo'
     */
    'link-type'?: 'redirectTo' | 'switchTab' | 'reLaunch';

    /**
     * 是否开启图片懒加载
     *
     * @default false
     */
    'lazy-load'?: boolean;
}

export interface VantCardExternalClassName extends VantBaseExternalClassName {
    /**
     * 左侧图片样式类
     */
    'thumb-class'?: string;

    /**
     * 标题样式类
     */
    'title-class'?: string;

    /**
     * 价格样式类
     */
    'price-class'?: string;

    /**
     * 划线原价样式类
     */
    'origin-price-class'?: string;

    /**
     * 描述样式类
     */
    'desc-class'?: string;

    /**
     * 数量样式类
     */
    'num-class'?: string;
}
