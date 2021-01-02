import React from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import User from '../interface/User';
import { postUser } from '../User.service';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';

export default function Register() {
    let history = useHistory();

    const onSubmit = async (data: User) => {
        await postUser(data).then(res => {
            toast.success("Usuário foi cadastrado!", { toastId: 'sucessUser' });
            history.push('/destinatario');
        }).catch(error => {
            toast.error("Usuário não foi cadastrado!", { toastId: error.message });
        });
    };

    return (
        <Header namePage="Pessoas" subPage="Novo Usuário">
            <Form handleSubmit={onSubmit} initialValues={INITIAL_VALUES} request={false} />
        </Header>
    );
}
