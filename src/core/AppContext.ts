import React, { useContext } from 'react';

import { IContext } from 'src/core/Store';

export const useAppContext = () => useContext(Context);

const Context = React.createContext<IContext>(null);

export default Context;
