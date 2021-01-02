import { HeadCell } from '../../../interfaces/TableInterface';

export function createRow(columnsList: Array<HeadCell>): Array<HeadCell> {
    if (columnsList[columnsList.length - 1].id === 'action') {
        columnsList.pop();
    }

    return columnsList;
}