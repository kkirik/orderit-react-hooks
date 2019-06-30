import React, { FC } from 'react';

interface IProps {
  items: string[];
}

export const Menu: FC<IProps> = ({ items }) => (
  <div>
    Menu
    {items.map(item => (
      <div>{item}</div>
    ))}
  </div>
);
