import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Products } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products!: Products[];

  ngOnInit(): void {
    this.products = [
      {
        id: '0',
        name: 'produit n°1',
        description: '',
        category: '',
        price: 10,
        quantity: 56,
      },
      {
        id: '1',
        name: 'produit n°2',
        description: '',
        category: '',
        price: 12,
        quantity: 254,
      },
      {
        id: '2',
        name: 'produit n°3',
        description: '',
        category: '',
        price: 16,
        quantity: 328,
      },
    ];
  }

  // les datats seront du genre
  // products$ ! : Observable<Product[]>
}
