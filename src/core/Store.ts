export interface IAction {
  order: number;
  type: string;
}

export interface IStore {
  order: number;
}

export interface IContext {
  dispatch: React.Dispatch<IAction>;
  store: IStore;
}

export function reducer(state: IStore, action: IAction) {
  switch (action.type) {
    case 'updateOrder':
      return { order: action.order };
    default:
      return state;
  }
}
