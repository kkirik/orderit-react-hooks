import React from 'react';

import { Layout } from 'src/core/styled/global';
import { Menu } from 'src/core/components/Menu';

export const BaseLayout = (props: any) => (
  <Layout>
    <Menu items={['s']}></Menu>
    {props.children}
  </Layout>
);
