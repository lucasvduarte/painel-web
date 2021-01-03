import React, { useState, useEffect } from 'react';
import { Header, Table, Modal } from '../../component/Component';
import { INITIAL_VALUES_PAGINATION } from './utils/INITIAL_VALUES';
import { Action, ACTION_EDIT, ACTION_DELETE, ACTION_VIEW, ACTION } from '../../component/table/interfaces/TableInterface';
import { HEAD_CELL } from './utils/HEAD_CELL';
import { useHistory } from "react-router-dom";
import { getQuizzes, deleteQuizzes } from './Quizzes.service';
import { toast } from "react-toastify";
import { InterfacePagination } from './interface/QuizzesPagination';
import Quizzes from './interface/Quizzes';
import { QuizzesInterface } from './interface/QuizzesComponent';

export default function QuizzesComponent({ allQuizzes }: QuizzesInterface) {

    let history = useHistory();
    const [Quizzes, setQuizzes] = useState<Array<Quizzes>>([]);
    const [openModalDelete, setOpenModalDelete] = useState<string>('');
    const [pagination, setPagination] = useState<InterfacePagination>(INITIAL_VALUES_PAGINATION);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        getQuizzes(pagination).then(res => {
            if (res.data) {
                setQuizzes(res.data);
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

    const onSubmit = (Quizzes: InterfacePagination) => {
        //setPagination({ ...pagination, uf: Quizzes.uf, municipio: Quizzes.municipio, unidadeOperacao: Quizzes?.unidadeOperacao, dataValidacaoInicial: Quizzes.dataValidacaoInicial, meioValidacaoFinal: Quizzes.meioValidacaoFinal });
    };

    const handleClickAction = (action: Action, Quizzes: InterfacePagination) => {
        if (action === ACTION_EDIT) {
            return history.push(`/quizzes/editar-quiz/${Quizzes._id}`);
        }
        if (action === ACTION_DELETE) {
            return handleClickModalDelete(Quizzes._id);
        }
        if (action === ACTION_VIEW) {
            return history.push(`/quizzes/visualizar-quiz/${Quizzes._id}`);
        }
    };

    const handleClickDelete = async () => {
        setRequest(true)
        await deleteQuizzes(openModalDelete).then(res => {
            toast.success("Registro excluído com sucesso!", { toastId: 'sucessDeleteQuizzes' });
        }).catch(error => {
            toast.error("O registro não pode ser removido enquanto estiver em uso.", { toastId: error.message });
        }).finally(function () {
            handleClickModalDelete('');
            setRequest(false)
        });
    };

    const headCell = (allQuizzes?: boolean) => {
        if (allQuizzes && HEAD_CELL[HEAD_CELL.length - 1].id === ACTION) {
            HEAD_CELL.pop();
        }
        return HEAD_CELL;
    }

    return (
        <Header namePage={`${allQuizzes ? 'Todos os' : 'Meus'} Quizzes`} link="/quizzes/meus-quizzes/novo-quiz" title={`${allQuizzes ? '' : 'Adiconar Quiz'}`} >

            <Modal.ModalDelete open={!!openModalDelete} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão do Registro?" />
            <Table
                request={request}
                data={Quizzes}
                headCells={headCell(allQuizzes)}
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
