import React, { SFC } from 'react';

import { Grid, GridItem } from 'src/core/styled/blocks';
import { Dropdown, IItem } from 'src/core/components/Dropdown';

interface IProps {
  children?: React.ReactElement | React.ReactElement[];
}

export const BaseLayout: SFC<IProps> = ({ children }) => {
  const gridTemplateAreas = `
    "header header"
    "main sidebar"
    "footer footer"
  `;

  const profileMenu: IItem[] = [
    {
      active: true,
      title: 'Show Profile',
      url: '/profile',
    },
    {
      active: false,
      title: 'Logout',
      url: '/logout',
    },
  ];

  return (
    <Grid
      gridTemplateAreas={gridTemplateAreas}
      columnGap="50px"
      rowGap="1px"
      gridTemplateColumns="2fr 30%"
      gridTemplateRows="60px 1fr 60px"
    >
      <Grid gridArea="header" columnGap="10px" gridTemplateColumns="2fr 2fr 1fr">
        <GridItem>Logo</GridItem>
        <GridItem>Order</GridItem>
        <GridItem>
          <Dropdown items={profileMenu}></Dropdown>
        </GridItem>
      </Grid>
      <GridItem gridArea="main">Main{children}</GridItem>
      <GridItem gridArea="sidebar">Sidebar</GridItem>
      <GridItem gridArea="footer">Footer</GridItem>
    </Grid>
  );
};
