import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

import { Box } from 'src/core/styled/blocks';
import { DD, DT } from 'src/core/styled/typography';
import { Order } from 'src/core/models/Order';
import { LeftArrow } from 'src/core/styled/components';
import { Spinner } from 'src/core/layout/Spinner';
import { useAppContext } from 'src/core/AppContext';

interface IProps extends RouteComponentProps<{ id: string }> {}

export const OrderPage: FC<IProps> = ({ match }) => {
  const [order, setOrder] = useState<Order>();
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAppContext();

  useEffect(() => {
    async function load() {
      setLoading(true);

      try {
        const { data } = await axios.get<Order>(`/api/orders/${match.params.id}`);

        setOrder(new Order(data));
        dispatch({ type: 'updateOrder', order: data.orderNumber });
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading || !order) return <Spinner />;

  return (
    <>
      <LeftArrow to="/orders" top="200px" left="100px" />
      <Box
        width="700px"
        margin="30px auto"
        borderRadius="10px"
        boxShadow="0 0 50px 0 rgba(0, 0, 0, 0.15)"
      >
        <Box
          center
          height="25px"
          background={order.statusColor}
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
      </Box>
    </>
  );
};
