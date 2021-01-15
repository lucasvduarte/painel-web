import React from 'react';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { MissionsInterface } from '../interface/MissionsComponent';
import { Header } from '../../../component/Component';

export default function View({ allMissions }: MissionsInterface) {

    let { id, secondaryId } = useParams<ParamTypes>();


    return (
        <Header>
            ineifnefne
        </Header>
    );
}
