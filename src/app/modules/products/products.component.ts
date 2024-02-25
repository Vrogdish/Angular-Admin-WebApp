import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { ProductsService } from '../../core/services/products.service';
import { Observable, map } from 'rxjs';
import { Products } from '../../shared/models/product';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { AddProductCardComponent } from './add-product-card/add-product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    ProductCardComponent,
    AddProductCardComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Products[]>;
  creatingMode = false;

  constructor(private productService: ProductsService) {}

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
