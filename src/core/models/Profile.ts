import { Order } from './Order';

export class User {
  firstname: string;
  lastname: string;
  balance: number;
  orderList: Order[] = [];

  get orders() {
    return this.orderList.map(order => new Order(order));
  }

  constructor(profile?: Omit<User, 'orders'>) {
    Object.assign(this, profile);
  }
}
