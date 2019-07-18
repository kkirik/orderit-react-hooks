import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Box } from 'src/core/styled/blocks';
import { DD, DT } from 'src/core/styled/typography';
import { StyledOrderCard } from 'src/core/styled/order';
import { Order, OrderStatus } from 'src/core/models/Order';

interface IProps {
  order: Order;
}

export const OrderCard: FC<IProps> = ({ order }) => (
  <StyledOrderCard
    width="300px"
    margin="10px"
    borderRadius="10px"
    boxShadow="0 0 50px 0 rgba(0, 0, 0, 0.15)"
  >
    <Link to={`/orders/${order.orderNumber}`}>
      <Box
        height="20px"
        background={
          {
            [OrderStatus.New]: 'grey',
            [OrderStatus.Done]: 'green',
            [OrderStatus.Ready]: 'coral',
            [OrderStatus.Error]: 'red',
            [OrderStatus.Preparing]: 'lightblue',
          }[order.status]
        }
        center
        borderRadius="10px 10px 0 0"
        color="#fafafa"
      >
        {order.status}
      </Box>
      <Box padding="10px">
        <dl>
          <DT>Order number:</DT>
          <DD>{order.orderNumber}</DD>
        </dl>
        <dl>
          <DT>Fullname:</DT>
          <DD>{order.customer}</DD>
        </dl>
        <dl>
          <DT>Order price:</DT>
          <DD>{order.price}$</DD>
        </dl>
        <dl>
          <DT>What's ordered:</DT>
          <DD>
            {order.orderList.map(el => (
              <span key={el}> {el}</span>
            ))}
          </DD>
        </dl>
      </Box>
    </Link>
  </StyledOrderCard>
);
