import { Action, HeadCell, Order } from './TableInterface';

export interface TableProps {
    data: Array<Object>;
    headCells: Array<HeadCell>;
    page?: number;
    rowsPerPage?: number;
    order?: Order;
    orderBy?: string;
    actionColumns?: number;
    request?: boolean;
    noActionDelete?: boolean;
    noActionEdit?: boolean;
    noActionView?: boolean;
    editable?: boolean;
    onChangePage?(event: unknown, newPage: number): void;
    onChangeRowsPerPage?(event: React.ChangeEvent<HTMLInputElement>): void;
    onRequestSort?(event: React.MouseEvent<unknown>, property: string): void;
    handleClickAction?(action: Action, value: Object, index?: number): void;
}