import React from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './User.component';
import Register from './register/NewUser.component';
import Edit from './register/EditUser.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/usuarios" component={User} />
            <Route exact path="/usuarios/novo-usuario" component={Register} />
            <Route exact path="/usuarios/editar-usuario" component={Edit} />
        </Switch>
    );

}

export default Routes;