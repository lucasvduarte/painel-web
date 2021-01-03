import React from "react";
import { Route, Switch } from "react-router-dom";
import user from './person/User.container';
import { Menu } from '../component/Component';
import Missions from './missions/Missions.container';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <Menu.MenuPages />} />
            <Route path="/usuarios" component={user} />
            <Route path="/missoes/" component={Missions} />
        </Switch>
    );
};

export default Routes;