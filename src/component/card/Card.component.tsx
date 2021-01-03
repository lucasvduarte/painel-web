import React, { ReactNode } from 'react';
import { CardC, NamePage } from './CardStyle';
import { ContainerStyled } from '../container/Container';
import Accordion from '../accordion/Accordion.component';
import { Grid } from '@material-ui/core';

type Props = {
    children?: ReactNode;
    title?: string;
    titleAccordion?: string;
    accordion?: boolean;
    botton?: number;
}

export default function ImgMediaCard({ children, title, titleAccordion, accordion, botton }: Props) {

    const card = <CardC> {children} </CardC>;
    const accordionC = <Accordion title={titleAccordion || ''}> {children} </Accordion >;

    return (
        <Grid item xs={12}>
            <ContainerStyled marginBottom={botton ?? 20}>
                {title && <NamePage>{title}</NamePage>}
                {accordion ? accordionC : card}
            </ContainerStyled>
        </Grid>
    );
}