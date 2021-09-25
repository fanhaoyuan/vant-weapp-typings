import { VantComponent } from '../base';

export interface VantTabProps {
    /**
     * 标签名称，作为匹配的标识符
     *
     * @default 标签的索引值
     */
    name?: string | number;

    /**
     * 标题
     */
    title?: string;

    /**
     * 是否禁用标签
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * 是否显示小红点
     */
    dot?: boolean;

    /**
     * 图标右上角提示信息
     */
    info?: string | number;

    /**
     * 自定义标题样式
     */
    'title-style'?: string;
}

export type VantTab = VantComponent<VantTabProps>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const Tab: VantTab;

export default Tab;
