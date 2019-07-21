import React from 'react';

import { Box, Grid } from 'src/core/styled/blocks';
import { DD, DT } from 'src/core/styled/typography';
import { LeftArrow } from 'src/core/styled/components';
import { OrderCard } from 'src/orders/OrderCard';
import { Spinner } from 'src/core/layout/Spinner';
import { useAppContext } from 'src/core/AppContext';

export const ProfilePage = () => {
  const { store } = useAppContext();
  const { user } = store;

  if (!user) return <Spinner />;

  return (
    <>
      <LeftArrow to="/orders" top="200px" left="100px" />
      <Box
        width="1000px"
        margin="30px auto"
        borderRadius="10px"
        boxShadow="0 0 50px 0 rgba(0, 0, 0, 0.15)"
      >
        <Box padding="10px">
          <dl>
            <DT>First Name:</DT>
            <DD>{user.firstname}</DD>
          </dl>
          <dl>
            <DT>FirstLame:</DT>
            <DD>{user.lastname}</DD>
          </dl>
          <dl>
            <DT>Balance:</DT>
            <DD>{user.balance} $</DD>
          </dl>
          <dl>
            <DT>What's ordered:</DT>
            <DD>
              <Grid gap="10px" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))">
                {user.orders.map((order) => (
                  <OrderCard key={order.orderNumber} order={order} />
                ))}
              </Grid>
            </DD>
          </dl>
        </Box>
      </Box>
    </>
  );
};
