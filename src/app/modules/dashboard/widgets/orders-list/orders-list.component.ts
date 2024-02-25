import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { Order } from '../../../../shared/models/order';
import { RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
import { OrdersService } from '../../../../core/services/orders.service';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [CardComponent, CommonModule, RouterLink],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss',
})
export class OrdersListComponent implements OnInit {
  orders$!: Observable<Order[]>;

  constructor(
    private ordersService: OrdersService,
    private usersService: UserService
  ) {}

  ngOnInit(): void {
    this.orders$ = this.ordersService
      .getOrders()
      .pipe(
        map((data) =>
          data.sort((a, b) => b.createdAt.getDate() - a.createdAt.getDate())
        )
      );
  }

  getUser(order: Order): Observable<string | undefined> {
    return this.usersService.getUsers().pipe(
      map((data) => data.find((value) => value.id === order.userID)),
      map((value) => value?.firstname)
    );
  }
}
