import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import Item from '../interface/Item';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { getByStore, postStore, putStore } from '../Store.service';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { useHistory } from "react-router-dom";
import { useSnackbar } from '../../../context/Snackbar';

export default function RegisterItem() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
    const { snackbar, setSnackbar } = useSnackbar();
    const [person, setPerson] = useState<Item>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        if (id) {
            getByStore(id).then(res => {
                setPerson(res.data)
            }).finally(() => {
                setRequest(false)
            });
        }
    }, [id]);

    const onSubmit = async (data: Item) => {
        await (id ? Edit(data) : Register(data));
    };

    const Register = (data: Item): Promise<any> => {
        return postStore(data).then(res => {
            setSnackbar({ ...snackbar, msg: "Item foi cadastrado!", type: 'success' });
            history.push('/Item/meus-Item');
        }).catch(error => {
            setSnackbar({ ...snackbar, msg: "Item não foi cadastrado!", type: 'error' });
        });
    };

    const Edit = (data: Item): Promise<any> => {
        return putStore(data).then(res => {
            setSnackbar({ ...snackbar, msg: "Item foi Atualizado!", type: 'success' });
            history.push('/Item/meus-Item');
        }).catch(error => {
            setSnackbar({ ...snackbar, msg: "Item não foi Atualizado!", type: 'error' });
        });
    };

    return (
        <Header namePage="Meus Item" subPage={`${id ? 'Editar' : 'Novo'} Item`}>
            <Form handleSubmit={onSubmit} initialValues={person} request={id ? request : false} />
        </Header>
    );
}
