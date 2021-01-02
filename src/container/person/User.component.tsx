import React, { useState, useEffect } from 'react';
import { Header, Table, Modal } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION } from './utils/INITIAL_VALUES';
import { Action, ACTION_EDIT, ACTION_DELETE, ACTION_VIEW } from '../../component/table/interfaces/TableInterface';
import { HEAD_CELL } from './utils/HEAD_CELL';
import { useHistory } from "react-router-dom";
import { getUser, deleteUser } from './User.service';
import { toast } from "react-toastify";
import { InterfacePagination } from './interface/UserPagination';
import User from './interface/User';

export default function UserComponent() {
    let history = useHistory();
    const [user, setUser] = useState<Array<User>>([]);
    const [openModalDelete, setOpenModalDelete] = useState<string>('');
    const [pagination, setPagination] = useState<InterfacePagination>(INITIAL_VALUES_PAGINATION);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        getUser(pagination).then(res => {
            if (res.data) {
                setUser(res.data);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [pagination, request]);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
        const isAsc = pagination.sort === property && pagination.asc === 1;
        setPagination({ ...pagination, sort: property, asc: isAsc ? -1 : 1 });
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPagination({ ...pagination, page: newPage + 1 });
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPagination({ ...pagination, limit: +event.target.value, page: 1 });
    };

    const handleClickModalDelete = (value?: string) => {
        setOpenModalDelete(value || '');
    };

    const onSubmit = (user: InterfacePagination) => {
        //setPagination({ ...pagination, uf: user.uf, municipio: user.municipio, unidadeOperacao: user?.unidadeOperacao, dataValidacaoInicial: user.dataValidacaoInicial, meioValidacaoFinal: user.meioValidacaoFinal });
    };

    const handleClickAction = (action: Action, user: InterfacePagination) => {
        if (action === ACTION_EDIT) {
            return history.push(`/usuario/editar-usuario/${user._id}`);
        }
        if (action === ACTION_DELETE) {
            return handleClickModalDelete(user._id);
        }
        if (action === ACTION_VIEW) {
            return history.push(`/usuario/visualizar-usuario/${user._id}`);
        }
    };

    const handleClickDelete = async () => {
        handleClickModalDelete('');
        setRequest(true)
        await deleteUser(openModalDelete).then(res => {
            toast.success("Registro excluído com sucesso!", { toastId: 'sucessDeleteUser' });
        }).catch(error => {
            toast.error("O registro não pode ser removido enquanto estiver em uso.", { toastId: error.message });
        }).finally(function () {
            setRequest(false)
        });
    };

    return (
        <Header namePage="Pessoas" link="/usuarios/novo-usuario" title="Adiconar Usuário" >

            <Modal.ModalDelete open={!!openModalDelete} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão do Registro?" />
            <Table
                request={request}
                data={user}
                headCells={HEAD_CELL}
                page={pagination.page}
                rowsPerPage={pagination.limit}
                order={pagination.asc === 1 ? 'asc' : 'desc'}
                orderBy={pagination.sort}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onRequestSort={handleRequestSort}
                handleClickAction={handleClickAction}
            />
        </Header>
    );
}
