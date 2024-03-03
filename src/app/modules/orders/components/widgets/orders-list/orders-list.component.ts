import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderInterface } from '../../../interfaces/order.interface';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [CardComponent, CommonModule, RouterLink],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss',
})
export class OrdersListComponent implements OnInit {
  orders!: OrderInterface[];

  constructor(
    private ordersService: OrdersService,
  ) {}

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

}
