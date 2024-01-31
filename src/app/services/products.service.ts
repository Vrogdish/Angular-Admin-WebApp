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

  
  updateProduct(productId : string) {
    alert("Sorry, impossible to modify in this demo")
  }
  deleteProduct(productId : string) {
    alert("Sorry, impossible to delete in this demo")
  }
  addProduct(){
    alert("Sorry, impossible to create in this demo")

  }
}


// getProductbyID()
// addProducts()
// updateProduct()
// deleteProduct()
