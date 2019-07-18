import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Box } from './blocks';

export const StyledOrderCard = styled(Box)`
  transition: 0.2s ease-in;
  cursor: pointer;

  a {
    color: #333;
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const ChoisenLink = styled(Link)`
  border-right: 1px solid green;
  border-left: 1px solid green;
  height: 100%;
  display: grid;
  align-items: center;
  text-decoration: none;
  color: #333;
`;
