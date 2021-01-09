import React, { useState, useEffect } from 'react';
import { Header, Tabs, Table } from '../../../component/Component';
import { HEAD_CELL_MISSIOES } from '../utils/HEAD_CELL';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { getByMissionsStatus } from '../Missions.service';

export default function View() {

    let history = useHistory();
    let { id } = useParams<ParamTypes>();
    const [missions, setMissions] = useState<Array<any>>([]);
    const [status, setStatus] = useState<any>({ status: 'pendentes' });
    const [request, setRequest] = useState(false);

    useEffect(() => {
        getByMissionsStatus(id, status).then(res => {
            if (res.data) {
                setMissions(res.data);
            }
        }).finally(function () {
            setRequest(false)
        });;
    }, [status]);

    const TableStatus = () => {
        return (
            <Table
                request={request}
                data={missions}
                headCells={HEAD_CELL_MISSIOES}
            />
        )
    }

    const tabValue = (value: number) => {
        if (!value) {
            setStatus({ ...status, status: 'pendentes' });
        } else if (value === 1) {
            setStatus({ ...status, status: 'aprovadas' });
        } else {
            setStatus({ ...status, status: 'rejeitadas' });
        }
        setRequest(true);
    }

    return (
        <Tabs nameTabs={['Missões Pendentes', 'Missões Aprovadas', 'Missões Rejeitadas']} tabValue={tabValue}>
            {TableStatus()}

            {TableStatus()}

            {TableStatus()}
        </Tabs>
    );
}
