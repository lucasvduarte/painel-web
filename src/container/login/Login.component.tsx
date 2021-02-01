import React, { useState } from 'react';
import { Header, Card, GridComponent } from '../../component/Component';
import { useHistory } from "react-router-dom";
import FormLogin from './form/Form.component';
import Login from './interface/Login';
import { INITIAL_VALUES } from './utils/INITIAL_VALUES';
import logo from "../../assets/images.png";
import { Grid } from '@material-ui/core';
import { Img } from './Image';
import { useSnackbar } from '../../context/Snackbar';
import signIn from './SignIn';

export default function LoginComponent() {

    let history = useHistory();
    const [request, setRequest] = useState(false);
    const { snackbar, setSnackbar } = useSnackbar();
    const [user, setUser] = useState<Login>(INITIAL_VALUES);

    const onSubmit = async (user: Login) => {
        setRequest(true);
        setUser(user)
        try {
            await signIn(user);
            history.push("/");
        } catch (error) {
            setSnackbar({ ...snackbar, msg: error.message, type: 'error' });
        }
        setRequest(false);
    };

    return (
        <GridComponent justify="center" alignItems="center">
            <Header>
                <Grid item xs={12}>
                    <Card>
                        <Img src={logo} alt="logo" />
                        <FormLogin handleSubmit={onSubmit} initialValues={user} request={request} />
                    </Card>
                </Grid>
            </Header>
        </GridComponent>
    );
}
