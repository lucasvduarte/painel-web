import styled from "styled-components";

export interface Props {
    width?: number;
    height?: number;
    borderRadius?: number;
}

export const Image = styled.img`
    width: ${(props: Props) => `${props.width ? props.width : 200}px`}; 
    height: ${(props: Props) => `${props.height ? props.height : 150}px`};
    margin: 5px; 
    border-radius: ${(props: Props) => `${props.borderRadius ? props.borderRadius : 0}px`};
`;