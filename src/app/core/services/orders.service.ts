import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orders } from '../mocks/mocks-orders';
import { Order } from '../../shared/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor() {}

  getOrders(): Observable<Order[]> {
    return new Observable((observer) => observer.next(orders));
  }

  setStatus(orderId: string, status: 'running' | 'send') {
    let orderIndex = 0;
    orders.map((order, index) => {
      order.id === orderId ? (orderIndex = index) : null;
    });

    orders[orderIndex].status = status;
  }
}
