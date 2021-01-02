import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../container/Menu.component';
import PrivateRoute from './PrivateRoute';

const Routes = () => {

    return (
        <Switch>
            <PrivateRoute path='/' component={(() => <Menu />)} />
        </Switch>
    )
}

export default Routes;