import React, { FC } from 'react';

import { Grid, GridItem } from 'src/core/styled/blocks';
import { Dropdown, IItem } from 'src/core/components/Dropdown';
import { Logo } from 'src/core/styled/typography';
import { ChoisenLink } from 'src/core/styled/order';
import { useAppContext } from '../AppContext';

interface IProps {
  children?: React.ReactElement | React.ReactElement[];
}

export const BaseLayout: FC<IProps> = ({ children }) => {
  const { store } = useAppContext();

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
      gridTemplateColumns="1fr"
      gridTemplateRows="60px 1fr 60px"
    >
      <Grid gridArea="header" gridTemplateColumns="2fr 2fr 1fr" background="lightgrey">
        <GridItem center>
          <Logo>Order It</Logo>
        </GridItem>
        <Grid alignItems="center" center>
          {store.order ? (
            <ChoisenLink to={`/orders/${store.order}`}>Previous order - {store.order}</ChoisenLink>
          ) : (
            'Not Choise'
          )}
        </Grid>
        <GridItem>
          <Dropdown items={profileMenu}></Dropdown>
        </GridItem>
      </Grid>
      <GridItem gridArea="main">{children}</GridItem>
    </Grid>
  );
};
