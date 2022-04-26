import { VantCell, VantCellEvents, VantCellExternalClassName, VantCellProps } from 'vant-weapp-typings';

type Cell = React.ComponentType<VantCell>;

export { VantCellExternalClassName, VantCell, VantCellEvents, VantCellProps };

declare const Cell: Cell;

export default Cell;
