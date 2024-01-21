import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss'
})
export class OrdersListComponent {

  orders = [
    {
      id : "4587",
      date : "20/01/2024",
      user : "Cédric",
      amount : "158,00 €",
      status : "new",
    },
    {
      id : "7222",
      date : "18/01/2024",
      user : "Paul",
      amount : "32,00 €",
      status : "new",
    },   {
      id : "1587",
      date : "17/01/2024",
      user : "Marie",
      amount : "89,00 €",
      status : "send",
    }
  ]

}
