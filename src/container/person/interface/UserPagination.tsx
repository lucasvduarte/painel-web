import { Pagination } from '../../../component/table/interfaces/Pagination';

export interface InterfacePagination extends Pagination {
    _id?: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    type: string;
    institution: string;
    can_edit: boolean;
}