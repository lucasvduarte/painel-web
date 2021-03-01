import React, { useState, useEffect } from 'react';
import { Tabs, Table, GridComponent, Avatar } from '../../../component/Component';
import { HEAD_CELL_REQUEST } from '../utils/HEAD_CELL';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { getAllOrders } from '../Store.service';
import { Status } from '../interface/Status';
import { APROVADO, PENDENTE } from '../utils/STATUS';
import Item from '../interface/ItemsView';
import { CardSteled2, Img } from '../component/TableBody';
import Grid from '@material-ui/core/Grid';
import SubInfo from '../component/SubInfo.component';
import defaultImg from '../../../assets/defaultImg.png';
import { FormatDateHours } from '../../../utils/format/FormatDate';
import { formatName } from '../../../utils/format/FormatName';

export default function View() {

    let { id } = useParams<ParamTypes>();
    const [requestStore, setRequestStore] = useState<Array<any>>([]);
    const [status, setStatus] = useState<Status>({ status: PENDENTE });
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        getAllOrders(id, status).then(res => {
            if (res.data) {
                setRequestStore(res.data);
                console.log(res.data)
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [id, status]);

    const format = (data: Array<Item>) => {
        return data.map((item: Item, index: number) => {
            return (
                <CardSteled2 key={index}>
                    <Avatar
                        titleAvatar={formatName(item._user.name)}
                        title={`Criado por ${item._user.name}`}
                        subTitle={`em ${FormatDateHours(item.created_at)}`}
                    />

                    <Img src={defaultImg} alt="images" />
                    <Grid container >
                        <SubInfo text="Quantidade:" information={item.quantity}></SubInfo>
                        <SubInfo text="Valor Total:" information={0}></SubInfo>
                    </Grid>
                    <Grid container>
                        <SubInfo text="Id do pedido:" information={item._id || ''} xs={12}></SubInfo>
                    </Grid>
                    <SubInfo text="Status:" information={item.status}></SubInfo>
                </CardSteled2>
            );
        });
    }

    const TableStatus = () => {
        return (
            <Table
                request={request}
                noTable
                data={requestStore}
                headCells={HEAD_CELL_REQUEST}
                noActionEdit
                noActionDelete
                noActionView
            >
                <GridComponent justify="center" alignItems="center">
                    {format(requestStore)}
                </GridComponent>
            </Table>
        )
    }

    const tabValue = (value: number) => {
        if (!value) {
            setStatus({ ...status, status: PENDENTE });
        } else if (value === 1) {
            setStatus({ ...status, status: APROVADO });
        }
        setRequest(true);
    }

    return (
        <Tabs nameTabs={['Pedidos Aceitos', 'Pedidos Pendentes']} tabValue={tabValue}>

            {TableStatus()}

            {TableStatus()}

        </Tabs>
    );
}
