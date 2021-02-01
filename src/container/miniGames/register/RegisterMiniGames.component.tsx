import React from 'react';
import { Header } from '../../../component/Component';
import Form from '../form/Form.component';
import MiniGames from '../interface/MiniGames';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { postMiniGamesMemories } from '../MiniGames.service';
import { useHistory } from "react-router-dom";
import { useSnackbar } from '../../../context/Snackbar';

export default function RegisterMiniGames() {

    let history = useHistory();
    const { snackbar, setSnackbar } = useSnackbar();

    const onSubmit = async (data: MiniGames) => {
        try {
            await postMiniGamesMemories(data);
            setSnackbar({ ...snackbar, msg: 'MiniGame foi cadastrado com sucesso', type: 'success' });
            history.push('/minigames/memoria');
        } catch (error) {
            setSnackbar({ ...snackbar, msg: "Erro ao cadastrar MiniGame!", type: 'error' });
        }
    };

    return (
        <Header namePage="MiniGames" subPage='Novo jogo da memória'>
            <Form handleSubmit={onSubmit} initialValues={INITIAL_VALUES} isImages={true} />
        </Header>
    );
}
