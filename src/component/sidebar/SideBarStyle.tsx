import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkRouter = styled(({ ...props }) => (
  <Link {...props} />
))`
  text-decoration: none; 
  color: #009C4E;
  font-weight: 600; 
`;

export const LinkRouterButton = styled(({ ...props }) => (
  <Link {...props} />
))`
  text-decoration: none; 
`; 