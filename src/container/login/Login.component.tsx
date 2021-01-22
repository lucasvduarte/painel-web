import React, { useState } from 'react';
import { Header, Card, GridComponent } from '../../component/Component';
import { useHistory } from "react-router-dom";
import FormLogin from './form/Form.component';
import { postLogin } from './Login.service';
import Login from './interface/Login';
import { toast } from "react-toastify";
import { INITIAL_VALUES } from './utils/INITIAL_VALUES';
import logo from "../../assets/images.png";
import { Grid } from '@material-ui/core';
import { Img } from './Image';
import { login } from '../../core/auth/auth';
import { Response } from "../../core/auth/Response";
export default function LoginComponent() {

    let history = useHistory();
    const [request, setRequest] = useState(false);
    const [user, setUser] = useState<Login>(INITIAL_VALUES);

    const canAccess = (user: Response) => {
        if (user.type === 'gestor' || user.type === 'professor') {
            login(user);
            history.push("/");
        } else {
            toast.success("Email ou senha incorretas", { toastId: 'errorUser' });
        }
    }

    const onSubmit = async (user: Login) => {
        setRequest(true);
        setUser(user)
        await postLogin(user).then(res => {
            canAccess(res.data);
        }).catch(error => {
            toast.error("Email ou senha incorretas", { toastId: error.message });
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
