import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Products } from '../../../../../shared/models/product';
import { RouterLink } from '@angular/router';
import { GlobalProductsService } from '../../../../../core/services/global-products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Products[]>;

  constructor(private productService: GlobalProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService
      .getProducts()
      .pipe(map((data) => data.sort((a, b) => a.quantity - b.quantity)));
  }
}
