import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Missions from './Missions.component';
import Register from './register/RegisterMissions.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/missoes/minhas-missoes" component={Missions} />
            <Route exact path="/missoes/minhas-missoes/nova-missao" component={Register} />
            <Route exact path="/missoes/minhas-missoes/editar-missao" component={Register} />
            <Route exact path="/missoes/todas-missoes" component={() => <Missions allMissions />} />
        </Switch>
    );

}

export default Routes;