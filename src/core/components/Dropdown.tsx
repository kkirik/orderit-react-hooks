import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { StyledMenu, StyledMenuItems } from 'src/core/styled/dropdown';
import { Box } from 'src/core/styled/blocks';

export interface IItem {
  title: string;
  url: string;
  active: boolean;
}

interface IProps {
  items: IItem[];
}

export const Dropdown: FC<IProps> = ({ items }) => {
  const previousItem = items.find(item => item.active);
  const [activeElement, setActiveElement] = useState(previousItem);
  const [openMenu, setOpenMenu] = useState(false);

  function setNewItem(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    const target = e.target as HTMLElement;
    const activeItem = items.find(el => el.title === target.textContent);
    setActiveElement(activeItem);
    setOpenMenu(false);
  }

  return (
    <Box
      center
      width="100%"
      height="60px"
      cursor="pointer"
      background="#fff"
      position="relative"
      onClick={() => setOpenMenu(!openMenu)}
    >
      <div>{activeElement && activeElement.title}</div>
      {openMenu && (
        <StyledMenu>
          {items.map(item => (
            <Link to={item.url} key={item.title}>
              <StyledMenuItems onClick={setNewItem}>{item.title}</StyledMenuItems>
            </Link>
          ))}
        </StyledMenu>
      )}
    </Box>
  );
};
