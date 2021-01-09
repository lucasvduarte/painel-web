import React from 'react';
import { Header, Tabs } from '../../../component/Component';
import AnswersChart from './statusMissions/AnswersChart.component';
import Answers from './statusMissions/Answers.component';

export default function View() {


    return (
        <Tabs nameTabs={['Missões Pendentes', 'Missões Aprovadas', 'Missões Rejeitadas']} >
            <Header>
                <AnswersChart />
            </Header>

            <Header>
                <Answers />
            </Header>
        </Tabs>
    );
}
