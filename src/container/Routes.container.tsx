import React from "react";
import { Route, Switch } from "react-router-dom";
import user from './person/User.container';
import { Menu } from '../component/Component';
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <Menu.MenuPages />} />
            <Route path="/usuarios" component={user} />
        </Switch>
    );
};

export default Routes;