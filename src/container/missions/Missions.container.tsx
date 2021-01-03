import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Missions from './Missions.component';
import Register from './register/NewMissions.component';
import Edit from './register/EditMissions.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/missoes/minhas-missoes" component={Missions} />
            <Route exact path="/missoes/minhas-missoes/nova-missao" component={Register} />
            <Route exact path="/missoes/minhas-missoes/editar-missao" component={Edit} />
        </Switch>
    );

}

export default Routes;