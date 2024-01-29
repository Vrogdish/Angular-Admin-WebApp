import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ProductsService } from '../../services/products.service';
import { Observable, map } from 'rxjs';
import { Products } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Products[]>;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService
      .getProducts()
      .pipe(map((data) => data.sort((a, b) => a.quantity - b.quantity)));
  }
}
