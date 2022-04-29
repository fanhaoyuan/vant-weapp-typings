import { VantComponent } from '../base';

export interface VantGoodsActionProps {
    /**
     * 是否为 `iPhoneX` 留出底部安全距离
     *
     * @default true
     */
    'safe-area-inset-bottom'?: boolean;
}

export type VantGoodsAction = VantComponent<VantGoodsActionProps>;
