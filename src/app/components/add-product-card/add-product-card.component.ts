import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product-card',
  standalone: true,
  imports: [],
  templateUrl: './add-product-card.component.html',
  styleUrl: './add-product-card.component.scss'
})
export class AddProductCardComponent {
  @Input() closeAddCard! : void

  constructor(private productService : ProductsService) {}

  handleSubmit(){
    this.productService.addProduct()
    this.closeAddCard
  }
}
