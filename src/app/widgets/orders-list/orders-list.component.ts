import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/order';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [CardComponent,CommonModule, RouterLink],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss'
})
export class OrdersListComponent implements OnInit{
orders! : Order[]


  ngOnInit(): void {
        this.orders = [
    {
      id : "4587",
      date : new Date(),
      user : "Cédric",
      amount : 158,
      status : "new",
    },
    {
      id : "7222",
      date : new Date(),
      user : "Paul",
      amount : 32,
      status : "new",
    },   {
      id : "1587",
      date : new Date(),
      user : "Marie",
      amount : 89,
      status : "send",
    }
  ]
  }
}
