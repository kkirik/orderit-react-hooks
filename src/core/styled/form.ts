import styled from 'styled-components';

export const Input = styled('input')`
  width: 100%;
  height: 30px;
  font-size: 15px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled('button')`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 30px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: 0.6s ease;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
