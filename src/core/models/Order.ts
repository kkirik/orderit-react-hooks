export enum OrderStatus {
  Done = 'done',
  Preparing = 'preparing',
  Error = 'error',
  New = 'new',
  Ready = 'ready',
}

export class Order {
  orderNumber: number;
  customer: string;
  price: number;
  orderList: string[] = [];
  status: OrderStatus;

  constructor(order?: Order) {
    Object.assign(this, order);
  }
}
