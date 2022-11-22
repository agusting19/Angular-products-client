import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (res) => {
        this.products = res;
      },
      (err) => console.log(err)
    );
  }

  deleteProduct(id: any): void {
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        console.log(res);
        this.getProducts();
      },
      (err) => console.log(err)
    );
  }
}
