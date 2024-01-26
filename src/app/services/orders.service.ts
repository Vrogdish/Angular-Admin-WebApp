import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orders } from '../../mocks/mocks-orders';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor() {}

  getOrders(): Observable<Order[]> {
    return new Observable((observer) => observer.next(orders));
  }
}
