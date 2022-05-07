/**
 * 普通事件类型
 */
export interface VantEvent<Detail = unknown> extends WechatMiniprogram.BaseEvent {
    detail: Detail;
}

/**
 * 触摸事件类型
 */
export interface VantTouchEvent<Detail = unknown>
    extends Omit<WechatMiniprogram.TouchEvent, 'detail'>,
        VantEvent<Detail> {}

/**
 * 普通事件处理类型
 */
export type VantEventHandler<Detail = unknown> = (event: VantEvent<Detail>) => void;

/**
 * Touch 事件处理类型
 */
export type VantTouchEventHandler<Detail = unknown> = (event: VantTouchEvent<Detail>) => void;

/**
 * 触摸坐标详情
 */
export interface TouchPositionDetail {
    x: number;
    y: number;
}
