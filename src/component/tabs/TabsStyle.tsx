import React from 'react';
import styled from "styled-components";
import Paper from '@material-ui/core/Paper';

export const PaperStyle = styled(({ ...props }) => (
  <Paper {...props} />
))`
  && {
      flex-grow: 1;
  }
`;

export const Container = styled.div`  
    transition: 0.2s ease-in;   
    margin: 25px;
    @media (max-width: 600px) {   
      margin: 15px;
      transition: 0.2s ease-in;
    }
`;