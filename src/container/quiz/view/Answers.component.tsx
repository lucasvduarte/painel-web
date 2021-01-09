import React, { useState } from 'react';
import { Header, Table } from '../../../component/Component';
import { HEAD_CELL_ANSWERS } from '../utils/HEAD_CELL';
import { useHistory } from "react-router-dom";

export default function QuizzesComponent() {

    let history = useHistory();
    const [quizzes, setQuizzes] = useState<Array<any>>([]);

    return (
        <Header>
            <Table
                data={quizzes}
                headCells={HEAD_CELL_ANSWERS}
            />
        </Header>
    );
}
