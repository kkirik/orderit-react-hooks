import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

import { OrderCard } from './OrderCard';
import { Grid, GridItem } from 'src/core/styled/blocks';
import { Search } from 'src/core/components/Search';
import { Order } from 'src/core/models/Order';
import { Spinner } from 'src/core/layout/Spinner';
import { H1 } from 'src/core/styled/typography';

interface IQueryParams {
  search?: string;
}

export function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>();
  const [loading, setLoading] = useState(false);

  const pageLoading = loading || !orders;

  useEffect(() => {
    load();
  }, []);

  async function load(queryParams?: IQueryParams) {
    const params = {
      ...(queryParams && { search: queryParams.search }),
    };

    setLoading(true);

    try {
      const res = await axios.get<Order[]>('/api/orders', { params });

      const newOrders = res.data.map((o) => new Order(o));
      setOrders(newOrders);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(value: string) {
    const searchValue = value && { search: value };

    load(searchValue);
  }

  function renderOrders() {
    return orders.length ? (
      <Grid gap="10px" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {orders.map((order) => (
          <GridItem key={order.orderNumber}>
            <OrderCard order={order} />
          </GridItem>
        ))}
      </Grid>
    ) : (
      <Grid center alignItems="center" gridTemplateColumns="1fr">
        <H1>No orders</H1>
      </Grid>
    );
  }

  return (
    <>
      <Search onSubmit={handleSubmit} />
      {pageLoading ? <Spinner /> : renderOrders()}
    </>
  );
}
