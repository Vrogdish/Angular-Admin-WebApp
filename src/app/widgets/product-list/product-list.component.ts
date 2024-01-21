import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
products = [
  {
    name : "produit n°1",
    prices : 10,
    quantity : 56
  },
  {
    name : "produit n°2",
    prices : 8.5,
    quantity : 412
  },
  {
    name : "produit n°3",
    prices : 12,
    quantity : 878
  },
]
}
