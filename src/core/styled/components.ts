import styled from 'styled-components';
import { Link } from 'react-router-dom';

import arrow from 'public/icons/left-arrow-back.png';

interface IArrowProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

export const LeftArrow = styled(Link)<IArrowProps>`
  cursor: pointer;
  background: url(${arrow}) no-repeat;
  background-size: cover;
  position: absolute;
  width: 50px;
  height: 50px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};

  &:before {
    content: '';
    border: 2px solid green;
    border-radius: 50%;
    position: absolute;
    top: -11px;
    left: -7px;
    width: 70px;
    height: 70px;
  }
`;
