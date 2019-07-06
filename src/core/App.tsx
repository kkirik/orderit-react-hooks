import React from 'react';

import { BaseLayout } from './layout/BaseLayout';
import { GlobalStyle } from './styled/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <BaseLayout>
        <div>init</div>
      </BaseLayout>
    </>
  );
}
