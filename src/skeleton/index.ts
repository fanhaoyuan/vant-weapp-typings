import { VantComponent } from '../base';

export interface VantSkeletonProps {
    /**
     * 段落占位图行数
     *
     * @default 0
     */
    row?: number;

    /**
     * 段落占位图宽度，可传数组来设置每一行的宽度
     *
     * @default '100%'
     */
    'row-width'?: string | string[];

    /**
     * 是否显示标题占位图
     *
     * @default false
     */
    title?: boolean;

    /**
     * 标题占位图宽度
     *
     * @default '40%'
     */
    'title-width'?: string | number;

    /**
     * 是否显示头像占位图
     *
     * @default false
     */
    avatar?: boolean;

    /**
     * 头像占位图大小
     *
     * @default '32px'
     */
    'avatar-size'?: string | number;

    /**
     * 头像占位图形状
     */
    'avatar-shape'?: 'square' | 'round';

    /**
     * 是否显示占位图，传`false`时会展示子组件内容
     *
     * @default true
     */
    loading?: boolean;

    /**
     * 是否开启动画
     *
     * @default true
     */
    animate?: boolean;
}

export type VantSkeleton = VantComponent<VantSkeletonProps>;
