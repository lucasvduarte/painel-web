import React from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import Missions from '../interface/Missions';
import { postMissions } from '../Missions.service';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';

export default function Register() {
    let history = useHistory();

    const onSubmit = async (data: Missions) => {
        await postMissions(data).then(res => {
            toast.success("Missão foi cadastrado!", { toastId: 'sucessMissions' });
            history.push('/missoes/minhas-missoes');
        }).catch(error => {
            toast.error("Missão não foi cadastrado!", { toastId: error.message });
        });
    };

    return (
        <Header namePage="Minhas Missões" subPage="Nova Missão">
            <Form handleSubmit={onSubmit} initialValues={INITIAL_VALUES} request={false} />
        </Header>
    );
}
