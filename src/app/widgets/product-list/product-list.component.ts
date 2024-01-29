import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { Observable, map, tap } from 'rxjs';
import { Products } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, CommonModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products$ ! : Observable<Products[]>

  constructor(private productService : ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts().pipe(
      map(data => data.sort((a,b)=>a.quantity - b.quantity))
    )
  }
}
