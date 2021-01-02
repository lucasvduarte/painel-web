import React, { ReactNode, Children } from 'react';
import { CardStyled, CardStyledSub } from './CardStyle';

interface Props {
    children?: ReactNode;
}

const FormMunicipalityDetails = ({ children }: Props) => {

    const childrenList: Array<ReactNode> = Children.toArray(children);
    const childrenOne: ReactNode = childrenList[0] || <></>;

    childrenList.shift();
    return (
        <CardStyled>
            <CardStyledSub>
                {childrenOne}
            </CardStyledSub>
            {childrenList.map((child: ReactNode) => { return child }) || <></>}
        </CardStyled>
    )
}

export default FormMunicipalityDetails;