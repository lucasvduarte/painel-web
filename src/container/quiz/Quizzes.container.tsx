import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Quizzes from './Quizzes.component';
import Register from './register/RegisterQuizzes.component';

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/quizzes/meus-quizzes" component={Quizzes} />
            <Route exact path="/quizzes/meus-quizzes/novo-quiz" component={Register} />
            <Route exact path="/quizzes/meus-quizzes/editar-quiz" component={Register} />
            <Route exact path="/quizzes/todos-quizzes" component={() => <Quizzes allQuizzes />} />
        </Switch>
    );

}

export default Routes;