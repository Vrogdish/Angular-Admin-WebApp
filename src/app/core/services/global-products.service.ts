import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { products } from '../mocks/mock-products';
import { GlobalProductInterface } from '../interfaces/global-product.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalProductsService {
  constructor() {}

  // on crée un observable pour simuler un http get
  getProducts(): Observable<GlobalProductInterface[]> {
    return of(products);
  }

  // fonction à définir suivant l API utilisée
  updateProduct(productId: string) {
    alert('Sorry, impossible to modify in this demo');
  }
  deleteProduct(productId: string) {
    alert('Sorry, impossible to delete in this demo');
  }
  addProduct() {
    alert('Sorry, impossible to create in this demo');
  }
}
