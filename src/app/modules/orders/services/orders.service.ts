import { Injectable } from '@angular/core';
import { GlobalOrdersService } from '../../../core/services/global-orders.service';
import { GlobalUserService } from '../../../core/services/global-user.service';
import { OrderInterface } from '../interfaces/order.interface';
import { Observable, forkJoin, map, of, tap } from 'rxjs';
import { GlobalProductsService } from '../../../core/services/global-products.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
 
  constructor(
    private globalOrderService: GlobalOrdersService,
    private globalUserService: GlobalUserService,
    private globalProductService: GlobalProductsService
  ) {}


getOrders(): Observable<OrderInterface[]> {
  return forkJoin({
    orders: this.globalOrderService.getOrders(),
    users: this.globalUserService.getAllUsers(),
    products: this.globalProductService.getProducts()  
  }).pipe(
    map(({ orders, users, products }) => {

      const mappedOrders =  orders.map(order => {
        const user = users.find(u => u.id === order.userId);
        const cart = order.cart.map(item => {
          const product = products.find(p => p.id === item.productId);
          return {
            productId: item.productId,
            productName: product ? product.name : 'Unknown',
            price: product ? product.price : 0,
            quantity: item.quantity
          };
        });
        const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
        return {
          id: order.id,
          user: user ? user : null,
          status: order.status,
          createdAt: order.createdAt,
          cart: cart,
          total: total
        };
      });
      return mappedOrders;
    })
  );
  
}
}

