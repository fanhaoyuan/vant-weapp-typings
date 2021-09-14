import { VantOpenTypeProps } from '../base/open-type';

export interface VantGoodsActionButtonProps extends Omit<VantOpenTypeProps, 'business-id'> {
    /**
     * 按钮文字
     */
    text?: string;

    /**
     * 按钮颜色，支持传入 `linear-gradient` 渐变色
     */
    color?: string;

    /**
     * 点击后跳转的链接地址
     */
    url?: string;

    /**
     * 链接跳转类型
     *
     * @default 'navigateTo'
     */
    'link-type'?: 'redirectTo' | 'switchTab' | 'reLaunch';

    /**
     * 标识符
     */
    id?: string;

    /**
     * 是否禁用按钮
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否显示为加载状态
     *
     * @default false
     */
    loading?: boolean;

    /**
     * 微信开放能力，具体支持可参考 微信官方文档
     */
    'open-type'?: string;

    /**
     * 按钮类型
     *
     * @default 'danger'
     */
    type?: 'primary' | 'info' | 'warning' | 'danger';

    /**
     * 是否为朴素按钮
     *
     * @default false
     */
    plain?: boolean;

    /**
     * 按钮尺寸
     *
     * @default 'normal'
     */
    size?: 'normal' | 'large' | 'small' | 'mini';
}
