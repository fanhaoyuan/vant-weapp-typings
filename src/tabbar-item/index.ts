import { VantComponent } from '../base';

export interface VantTabbarItemProps {
    /**
     * 标签名称，作为匹配的标识符
     *
     * @default 当前标签的索引值
     */
    name?: string | number;

    /**
     * 图标名称或图片链接，可选值见 `Icon` 组件
     */
    icon?: string;

    /**
     * 图标类名前缀，同 `Icon` 组件的 `class-prefix` 属性
     *
     * @default 'van-icon'
     */
    'icon-prefix'?: string;

    /**
     * 是否显示小红点
     */
    dot?: boolean;

    /**
     * 图标右上角提示信息
     */
    info?: string | number;
}

export type VantTabbarItem = VantComponent<VantTabbarItemProps>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const TabbarItem: VantTabbarItem;

export default TabbarItem;
