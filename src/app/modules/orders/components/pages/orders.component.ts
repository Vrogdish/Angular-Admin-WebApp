import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { OrderInterface } from '../../interfaces/order.interface';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  orders!: OrderInterface[];

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }
}
