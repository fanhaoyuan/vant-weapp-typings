import { VantGoodsAction, VantGoodsActionProps, VantGoodsActionEvents } from 'vant-weapp-typings';

type GoodsAction = React.ComponentType<VantGoodsAction>;

export { VantGoodsAction, VantGoodsActionEvents, VantGoodsActionProps };

declare const GoodsAction: GoodsAction;

export default GoodsAction;
