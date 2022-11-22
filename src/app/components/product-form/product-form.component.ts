import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageURL: '',
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  submitProduct() {
    this.productService.createProduct(this.product).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/products']);
      },
      (error) => console.log(error)
    );
  }
}
