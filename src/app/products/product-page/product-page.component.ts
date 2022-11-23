import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { IProduct, IProductCart } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product: IProduct | undefined;
  quantity = 1;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = routeParams.get("id");
    this.product = this.productsService.getById(Number(productId));
  }

  addToCart() {
    /*this.notificationService.notification("Produto adicionado ao carrinho!");*/
    const product: IProductCart = {
      ...this.product!,
      quantityProducts : this.quantity
    }
    this.cartService.addToCart(product);
  }

}
