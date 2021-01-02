import React, { ReactNode } from 'react';
import { CardC, NamePage } from './CardStyle';
import { ContainerStyled } from '../container/Container';
import Accordion from '../accordion/Accordion.component';

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
        <ContainerStyled marginBottom={botton ?? 20}>
            {title && <NamePage>{title}</NamePage>}
            {accordion ? accordionC : card}
        </ContainerStyled>
    );
}