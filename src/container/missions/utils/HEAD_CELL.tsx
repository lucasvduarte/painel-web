import { HeadCell, ACTION } from '../../../component/table/interfaces/TableInterface';

export const HEAD_CELL: Array<HeadCell> = [
    { id: 'name', label: 'Name' },
    { id: 'description', label: 'Descrição' },
    { id: 'end_message', label: 'Messagem Final' },
    { id: 'lux', label: 'lux' },
    { id: 'resources', label: 'resources' },
    { id: ACTION, label: 'Ação' },
];


export const HEAD_CELL_MISSIOES: Array<HeadCell> = [
    { id: 'name', label: 'Name' },
    { id: 'date', label: 'Data de submissão' },
    { id: ACTION, label: 'Ação' },
];