import React, { useState, useEffect } from 'react';
import { Progress } from '../../component/Component';
import { getGameMap } from './GameMap.service';
import Maps from './component/Maps.component';

export default function UserComponent() {

    const [gameMap, setGameMap] = useState<Array<any>>([]);
    const [request, setRequest] = useState(true);

    useEffect(() => {
        getGameMap().then(res => {
            if (res.data) {
                setGameMap(res.data);
            }
        }).finally(function () {
            setRequest(false)
        });
    }, [request]);

    if (request) {
        return <Progress open={request} />
    }

    return (
        <Maps data={gameMap} />
    );
}
