import { Component, Input } from '@angular/core';
import { Products } from '../../../../shared/models/product';
import { CommonModule } from '@angular/common';
import { GlobalProductsService } from '../../../../core/services/global-products.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Products;
  editorMode = false;

  constructor(private productService: GlobalProductsService) {}

  edit() {
    this.editorMode === false
      ? (this.editorMode = true)
      : (this.editorMode = false);
  }

  handleSubmit() {
    if (confirm('are you sure')) {
      this.edit();
      this.productService.updateProduct(this.product.id);
    }
  }

  handleDelete() {
    confirm('are you sure to delete ref : ' + this.product.id)
      ? this.productService.deleteProduct(this.product.id)
      : null;
  }
}
