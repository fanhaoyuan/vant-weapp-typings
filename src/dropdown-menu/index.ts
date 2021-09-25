import { VantComponent } from '../base';

export interface VantDropdownMenuProps {
    /**
     * 菜单标题和选项的选中态颜色
     *
     * @default '#ee0a24'
     */
    'active-color'?: string;

    /**
     * 菜单栏 `z-index` 层级
     *
     * @default 10
     */
    'z-index'?: number;

    /**
     * 动画时长，单位毫秒
     *
     * @default 200
     */
    duration?: number;

    /**
     * 菜单展开方向
     */
    direction?: 'up' | 'down';

    /**
     * 是否显示遮罩层
     *
     * @default true
     */
    overlay?: boolean;

    /**
     * 是否在点击遮罩层后关闭菜单
     *
     * @default true
     */
    'close-on-click-overlay'?: boolean;

    /**
     * 是否在点击外部 `menu` 后关闭菜单
     *
     * @default true
     */
    'close-on-click-outside'?: boolean;
}

export type VantDropdownMenu = VantComponent<VantDropdownMenuProps>;

/**
 * @deprecated
 *
 * 将在`v1.22`移除
 */
declare const DropdownMenu: VantDropdownMenu;

export default DropdownMenu;
