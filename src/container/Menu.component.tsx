import React from 'react';
import { Menu, Button } from '../component/Component';
import Routes from "./Routes.container";
import { getToken } from '../core/auth/auth';

export default function MenuC() {
    console.log(getToken())
    return (
        <>
            <Menu.AppBar />
            <Menu.Hearder />
            <Menu.Main >
                <Button.ButtonHome />
                <Routes />
            </Menu.Main>
        </>
    );
}
