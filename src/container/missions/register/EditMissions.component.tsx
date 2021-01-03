import React, { useState, useEffect } from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import Missions from '../interface/Missions';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { putMissions, getByMissions } from '../Missions.service';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { toast } from "react-toastify";

export default function Edit() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
    const [person, setPerson] = useState<Missions>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        getByMissions(id).then(res => {
            setPerson(res.data)
        }).finally(() => {
            setRequest(false)
        });
    }, [id]);

    const onSubmit = async (data: Missions) => {
        await putMissions(data).then(res => {
            toast.success("Missão foi Atualizado!", { toastId: 'sucessMissions' });
            history.push('/missoes/minhas-missoes');
        }).catch(error => {
            toast.error("Missão não foi Atualizado!", { toastId: error.message });
        })
    };

    return (
        <Header namePage="Minhas Missões" subPage="Editar Missão">
            <Form handleSubmit={onSubmit} initialValues={person} request={request} />
        </Header>
    );
}
