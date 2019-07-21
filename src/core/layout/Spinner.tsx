import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled('div')`
  width: 30px;
  height: 30px;
  border: 3px solid green;
  border-radius: 50%;
  border-left-color: transparent;
  animation: 0.8s ${load} infinite linear;
  position: fixed;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
