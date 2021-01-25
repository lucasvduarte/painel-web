import React from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import MiniGames from '../interface/MiniGames';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { postMiniGamesMemories } from '../MiniGames.service';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function RegisterMiniGames() {

    let history = useHistory();

    const onSubmit = async (data: MiniGames) => {
        await postMiniGamesMemories(data).then(res => {
            toast.success("MiniGame foi cadastrado com sucesso!", { toastId: 'sucessMiniGames' });
            history.push('/minigames/memoria');
        }).catch(error => {
            toast.error("Erro ao cadastrar MiniGame!", { toastId: error.message });
        });
    };

    return (
        <Header namePage="MiniGames" subPage='Novo jogo da memória'>
            <Form handleSubmit={onSubmit} initialValues={INITIAL_VALUES} isImages={true} />
        </Header>
    );
}
