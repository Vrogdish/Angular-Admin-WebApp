import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/product';
import { products } from '../../mocks/mock-products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}


  // on crée un observable pour simuler un http get

  getProducts(): Observable<Products[]> {
    return new Observable<Products[]>((observer) => observer.next(products));
  }
}

// getProductbyID()
// addProducts()
// updateProduct()
// deleteProduct()
