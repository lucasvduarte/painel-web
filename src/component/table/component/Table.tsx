import React from 'react';
import styled from "styled-components";
import Paper from '@material-ui/core/Paper';

type Props = {
    marginLeft?: number;
}

export const PaperComponent = styled(({ ...props }) => (
    <Paper {...props} />
))`
    width: 100%;
    margin-bottom: 20px;
    min-width: 150px;
`;

export const Span = styled.span`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    top: 20px;
    width: 1px;
`;

export const Button = styled.span`
    cursor: pointer;
    margin-left: ${(props: Props) => `${props.marginLeft ? props.marginLeft : 0}px`};
`;
