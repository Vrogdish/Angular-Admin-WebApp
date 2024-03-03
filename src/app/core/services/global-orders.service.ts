import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { orders } from '../mocks/mocks-orders';
import { GlobalOrderInterface } from '../interfaces/global-order.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalOrdersService {
  constructor() {}

  getOrders(): Observable<GlobalOrderInterface[]> {
    return of(orders);
  }

  setStatus(orderId: string, status: 'running' | 'send') {
    let orderIndex = 0;
    orders.map((order, index) => {
      order.id === orderId ? (orderIndex = index) : null;
    });

    orders[orderIndex].status = status;
  }
}
