import React, { useState } from 'react';
import { Header, Card, GridComponent } from '../../component/Component';
import { useHistory } from "react-router-dom";
import FormLogin from './form/Form.component';
import { postLogin } from './Login.service';
import Login from './interface/Login';
import { INITIAL_VALUES } from './utils/INITIAL_VALUES';
import logo from "../../assets/images.png";
import { Grid } from '@material-ui/core';
import { Img } from './Image';
import { login } from '../../core/auth/auth';
import { Response } from "../../core/auth/Response";
import { useSnackbar } from '../../context/Snackbar';

export default function LoginComponent() {

    let history = useHistory();
    const [request, setRequest] = useState(false);
    const { snackbar, setSnackbar } = useSnackbar();
    const [user, setUser] = useState<Login>(INITIAL_VALUES);

    const canAccess = (user: Response) => {
        if (user.type === 'gestor' || user.type === 'professor') {
            login(user);
            history.push("/");
        } else {
            setSnackbar({ ...snackbar, msg: "Email ou senha incorretas!", type: 'error' });
        }
    }

    const onSubmit = async (user: Login) => {
        setRequest(true);
        setUser(user)
        await postLogin(user).then(res => {
            canAccess(res.data);
        }).catch(error => {
            setSnackbar({ ...snackbar, msg: "Email ou senha incorretas!", type: 'error' });
        }).finally(() => {
            setRequest(false);
        });
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
