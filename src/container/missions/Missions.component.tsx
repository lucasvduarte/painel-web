import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { Header, Table, Modal } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION } from './utils/INITIAL_VALUES';
import { Action, ACTION_EDIT, ACTION_DELETE, ACTION_VIEW } from '../../component/table/interfaces/TableInterface';
import { HEAD_CELL, HEAD_CELL_NO_ACTION } from './utils/HEAD_CELL';
import { useHistory } from "react-router-dom";
import { getMissions, deleteMissions } from './Missions.service';
import { toast } from "react-toastify";
import { InterfacePagination } from './interface/MissionsPagination';
import Missions from './interface/Missions';
import { MissionsInterface } from './interface/MissionsComponent';
import { getToken } from "../../core/auth/auth";
import { authentication } from '../../core/auth/Authentication';

export default function MissionsComponent({ allMissions }: MissionsInterface) {

    let history = useHistory();
    const [missions, setMissions] = useState<Array<Missions>>([]);
    const [openModalDelete, setOpenModalDelete] = useState<string>('');
    const [pagination, setPagination] = useState<InterfacePagination>(INITIAL_VALUES_PAGINATION);
    const [request, setRequest] = useState(true);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        let paginationAux: InterfacePagination = pagination;

        if (!allMissions) {
            paginationAux._user = getToken()._id;
        }
        getMissions(paginationAux).then(res => {
            if (res.data) {
                setMissions(res.data.docs);
                setTotal(res.data.total);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [pagination, request]);

    const handleRequestSort = (_event: MouseEvent<unknown>, property: string) => {
        const isAsc = pagination.sort === property && pagination.asc === 1;
        setPagination({ ...pagination, sort: property, asc: isAsc ? -1 : 1 });
    };

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPagination({ ...pagination, page: newPage + 1 });
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setPagination({ ...pagination, limit: +event.target.value, page: 1 });
    };

    const handleClickModalDelete = (value?: string) => {
        setOpenModalDelete(value || '');
    };

    const onSubmit = (Missions: InterfacePagination) => {
        //setPagination({ ...pagination, uf: Missions.uf, municipio: Missions.municipio, unidadeOperacao: Missions?.unidadeOperacao, dataValidacaoInicial: Missions.dataValidacaoInicial, meioValidacaoFinal: Missions.meioValidacaoFinal });
    };

    const handleClickAction = (action: Action, Missions: InterfacePagination) => {
        if (action === ACTION_EDIT) {
            return history.push(`/missoes/minhas-missoes/editar-missao/${Missions._id}`);
        }
        if (action === ACTION_DELETE) {
            return handleClickModalDelete(Missions._id);
        }
        if (action === ACTION_VIEW) {
            return history.push(`/missoes/${allMissions ? 'todas-missoes' : 'minhas-missoes'}/visualizar-missao/${Missions._id}`);
        }
    };

    const handleClickDelete = async () => {
        await deleteMissions(openModalDelete).then(res => {
            toast.success("Missão excluída com sucesso!", { toastId: 'sucessDeleteMissions' });
        }).catch(error => {
            toast.error("Erro ao excluir missão!", { toastId: error.message });
        }).finally(function () {
            setRequest(true);
            handleClickModalDelete('');
        });
    };

    return (
        <Header namePage={`${allMissions ? 'Todas as' : 'Minhas'} Missões`} link="/missoes/minhas-missoes/nova-missao" title='Adicionar Missão' can={(authentication() && !allMissions)} >

            <Modal.ModalDelete open={!!openModalDelete} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão dessa missão?" />
            <Table
                request={request}
                data={missions}
                size={total}
                headCells={authentication() ? HEAD_CELL : HEAD_CELL_NO_ACTION}
                page={pagination.page}
                rowsPerPage={pagination.limit}
                order={pagination.asc === 1 ? 'asc' : 'desc'}
                orderBy={pagination.sort}
                noActionDelete={(allMissions || !authentication())}
                noActionEdit={(allMissions || !authentication())}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onRequestSort={handleRequestSort}
                handleClickAction={handleClickAction}
            />
        </Header>
    );
}
