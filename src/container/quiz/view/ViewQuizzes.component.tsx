import React from 'react';
import { Header, Tabs } from '../../../component/Component';
import AnswersChart from './AnswersChart.component';
import Answers from './Answers.component';

export default function View() {


    return (
        <Tabs nameTabs={['Ver Grafico', 'Ver Respostas']} >
            <AnswersChart />

            <Answers />
        </Tabs>
    );
}
