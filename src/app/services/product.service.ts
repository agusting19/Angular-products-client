import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/product`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/product/${id}`);
  }

  createProducts(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/product/create`, product);
  }

  updateProducts(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/product/update?productID=${id}`, product);
  }

  deleteProducts(id: string): Observable<Product> {
    return this.http.delete<Product>(
      `${this.BASE_URL}/product/delete?productID=${id}`
    );
  }
}
