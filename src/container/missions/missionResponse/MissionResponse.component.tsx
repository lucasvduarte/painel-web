import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { MissionsInterface } from '../interface/MissionsComponent';
import { Header, Card, Img, Button, GridComponent } from '../../../component/Component';
import { getSeeAnswerMissions, putSeeMyAnswer, getByMissions } from '../Missions.service';
import MissionsStatus from '../interface/MissionsStatus';
import Maps from '../../gameMap/component/Maps.component';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Missions from '../interface/Missions';
import Form from './Form.component';

const statusRejected: any = { status: "Rejeitado", imp: 0, people: 0 };

export default function View({ allMissions }: MissionsInterface) {

    let { id, secondaryId } = useParams<ParamTypes>();
    const [seeAnswerMissions, setSeeAnswerMissions] = useState<MissionsStatus>();
    const [request, setRequest] = useState<boolean>(true);
    const [approved, setApproved] = useState<boolean>(false);
    const [missionInformation, setMissionInformation] = useState<Missions>();
    const [status, setStatus] = useState<any>({
        status: "Rejeitado",
        imp: 0,
        people: 0,
    });

    const handleChangeApproved = () => {
        setApproved(true);
        setStatus({ ...status, status: "Aprovado" });
    };
    useEffect(() => {
        getByMissions(id).then(res => {
            setMissionInformation(res.data)
        });
        getSeeAnswerMissions(id, secondaryId || '').then(res => {
            if (res.data) {
                setSeeAnswerMissions(res.data);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [id, secondaryId, request]);

    const image = (image: any) => {
        return (
            <Card noPadding >
                <Img src={image} alt="imageDefaultUser" height={220} width={300} />
            </Card>
        )
    }
    const text = (text: any) => {
        return (
            <Card >
                {text}
            </Card>
        )
    }

    const video = (video: any) => {
        return (
            <Card noPadding>
                <video src={video} controls style={{ width: '100%', maxWidth: 550, maxHeight: 230, borderRadius: 12 }}>
                    Seu navegador não suporta o elemento <code>video</code>.
                    </video>
            </Card >
        )
    }

    const audio = (audio: any) => {
        return (
            <Card noPadding>
                <audio src={audio} controls loop>
                    Navegador não suporta
                </audio>
            </Card>
        )
    }

    const map = (location_lat: string, location_lng: string) => {
        return (
            <Card noPadding >
                <div style={{ position: 'relative', height: 480, width: '100%' }}>
                    <Maps location_lat={location_lat} location_lng={location_lng} />
                </div>
            </Card >
        )
    }

    const handleSubmit = async (event: any) => {
        setRequest(true);
        await putSeeMyAnswer(id, secondaryId || '', event).then((res) => {
            toast.success(`Missão ${event.status} com sucesso`);
        }).catch((error) => {
            toast.error(`Erro ao ${event.status} Missão`);
        }).finally(function () {
            setRequest(false);
        });
    };


    const Entrepreneurial = () => {

        return (
            <div >
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                >
                    <div style={{ color: 'white' }}>
                        {`Nome da obra: ${seeAnswerMissions?.title}`}
                    </div>
                    <div style={{ color: 'white' }}>
                        {`Recursos: ${seeAnswerMissions?.value}`}
                    </div>
                </Grid>
                <div>
                    <Button.ButtonForm onClick={() => handleSubmit(status)} />
                </div>
            </div>
        )
    }

    return (
        <Header>
            <Card>
                <div>  Usuario: {seeAnswerMissions?._user.name}</div>
                <div>  Missão: {seeAnswerMissions?._mission.name}</div>
            </Card>
            {seeAnswerMissions?.text_msg && text(seeAnswerMissions?.text_msg)}
            {seeAnswerMissions?.audio && audio(seeAnswerMissions?.audio)}


            {seeAnswerMissions?.image && image(seeAnswerMissions?.image)}

            {seeAnswerMissions?.video && video(seeAnswerMissions?.video)}

            {(seeAnswerMissions?.location_lng && seeAnswerMissions?.location_lat) && map(seeAnswerMissions?.location_lat, seeAnswerMissions.location_lng)}
            <GridComponent spacing={3}>
                <Grid item>
                    <Button.ButtonC title="Rejeita Missão" onClick={() => handleSubmit(statusRejected)}></Button.ButtonC>
                </Grid>
                <Grid item>
                    <Button.ButtonC title="Aprovar Missão" onClick={() => handleChangeApproved()}></Button.ButtonC>
                </Grid>
            </GridComponent>
            {approved && (!missionInformation?.isEntrepreneurial ? <Form handleSubmit={handleSubmit} initialValues={status} /> : <Entrepreneurial />)}
        </Header>
    );
}
