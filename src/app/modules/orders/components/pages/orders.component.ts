import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../../core/services/orders.service';
import { Order } from '../../../../shared/models/order';
import { Observable } from 'rxjs';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  orders$!: Observable<Order[]>;

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrders();
  }

  changeStatus(status: 'running' | 'send', orderId: string) {
    this.orderService.setStatus(orderId, status);
  }
}
