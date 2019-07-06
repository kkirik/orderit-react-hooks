import styled from 'styled-components';

export const StyledMenu = styled('ul')`
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 5px lightgray;
`;

export const StyledMenuItems = styled('li')`
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  height: 60px;
  width: 100%;
  font-size: 15px;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: lightskyblue;
    transition: 0.2s ease-in;
  }
`;
