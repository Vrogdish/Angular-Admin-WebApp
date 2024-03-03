import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Products } from '../../../../shared/models/product';
import { CommonModule } from '@angular/common';
import { GlobalProductsService } from '../../../../core/services/global-products.service';
import { AddProductCardComponent } from '../add-product-card/add-product-card.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule, AddProductCardComponent, ProductCardComponent
  ],
     templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Products[]>;
  creatingMode = false;

  constructor(private productService: GlobalProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService
      .getProducts()
      .pipe(map((data) => data.sort((a, b) => a.quantity - b.quantity)));
  }

  createProduct() {
    this.creatingMode = true;
  }

  closeAddCard() {
    this.creatingMode = false;
  }
}
