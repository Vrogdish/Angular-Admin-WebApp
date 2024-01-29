import { Component, Input } from '@angular/core';
import { Products } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product ! : Products
  editorMode = false


  edit() {
    this.editorMode === false ? this.editorMode = true : this.editorMode = false
  }

  handleSubmit() {
   confirm("are you sure") ? this.edit() : null
  }

  handleDelete() {
    confirm("are you sure")
  }
}
