import { User } from './models/Profile';

export interface IAction {
  order?: number;
  user?: User;
  type: string;
}

export interface IStore {
  order?: number;
  user?: User;
}

export interface IContext {
  dispatch?: React.Dispatch<IAction>;
  store?: IStore;
}

export function reducer(state: IStore, action: IAction) {
  switch (action.type) {
    case 'updateOrder':
      return { ...state, order: action.order };
    case 'loadUsers':
      return { ...state, user: action.user };
    default:
      return state;
  }
}
