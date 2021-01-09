import { HeadCell, ACTION } from '../../../component/table/interfaces/TableInterface';

export const HEAD_CELL: Array<HeadCell> = [
    { id: 'title', label: 'Título' },
    { id: 'lux', label: 'Lux' },
    { id: 'resources', label: 'Recursos' },
    { id: 'secret_code', label: 'Código secreto' },
    { id: ACTION, label: 'Ação' },
];


export const HEAD_CELL_ANSWERS: Array<HeadCell> = [
    { id: 'user', label: 'Usuário' },
    { id: 'lux', label: 'Título do quiz' },
    { id: 'resources', label: 'Opção marcada' },
    { id: 'secret_code', label: 'Opção correta' },
    { id: ACTION, label: 'Ação' },
]; 