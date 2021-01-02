import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import User from '../interface/User';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { putUser, getByUser } from '../User.service';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { toast } from "react-toastify";

export default function Edit() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
    const [person, setPerson] = useState<User>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        getByUser(id).then(res => {
            setPerson(res.data)
        }).finally(() => {
            setRequest(false)
        });
    }, [id]);

    const onSubmit = async (data: User) => {
        await putUser(data).then(res => {
            toast.success("Usuário foi Atualizado!", { toastId: 'sucessUser' });
            history.push('/destinatario');
        }).catch(error => {
            toast.error("Usuário não foi Atualizado!", { toastId: error.message });
        })
    };

    return (
        <Header namePage="Pessoas" subPage="Editar Usuário">
            <Form handleSubmit={onSubmit} initialValues={person} request={request} />
        </Header>
    );
}
