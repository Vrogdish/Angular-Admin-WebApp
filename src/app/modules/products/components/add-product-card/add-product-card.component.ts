import { Component, Input } from '@angular/core';
import { GlobalProductsService} from '../../../../core/services/global-products.service';

@Component({
  selector: 'app-add-product-card',
  standalone: true,
  imports: [],
  templateUrl: './add-product-card.component.html',
  styleUrl: './add-product-card.component.scss',
})
export class AddProductCardComponent {
  @Input() closeAddCard!: void;

  constructor(private productService: GlobalProductsService) {}

  handleSubmit() {
    this.productService.addProduct();
    this.closeAddCard;
  }
}
