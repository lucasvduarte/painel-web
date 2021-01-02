import React, { MouseEvent } from 'react';
import ButtomMenuC from '../button/ButtonMenu.component';
import BootstrapButton from '../button/BootstrapButton.component';
import GridComponent from '../grid/GridComponent.component';
import { Grid } from '@material-ui/core';

interface ListPagesInterface {
    title: string;
    href: string;
    value?: string;
    onClick?(e: MouseEvent<HTMLElement>): void;
    arraySubMenu?: Array<any>;
    image: any;
}

function ListPages(props: ListPagesInterface) {
    const { title, value, arraySubMenu, href } = props;

    const buttomMenu = () => {
        return (
            <ButtomMenuC {...props} />
        )
    }

    const buttomSubMenu = (array: Array<any>) => {
        return (
            <GridComponent direction="column" alignItems="center">
                {array.map((obj: any, index: number) => {
                    return <BootstrapButton key={index} title={obj.title} href={`${href}${obj.href}`} />
                })}
            </GridComponent>
        );
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            {(!!value && (title === value)) ? buttomSubMenu(arraySubMenu || []) : buttomMenu()}
        </Grid>
    )
}
export default ListPages;