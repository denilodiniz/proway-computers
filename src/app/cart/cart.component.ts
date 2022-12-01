import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { IProductCart } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItens: IProductCart[] = [];
  totalPrice = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartItens = this.cartService.getCart();
    this.sumTotalPrice();
  }

  removeProductToCart(productId: number) {
    this.cartService.removeProductToCart(productId);
    this.cartItens = this.cartService.getCart();
    this.cartService.updateQuantityProductsBadgeCart();
    this.sumTotalPrice();
  }

  sumTotalPrice() {
    this.totalPrice = this.cartItens.reduce((prev, curr) => prev + (curr.price * curr.quantityProducts), 0);
  }

  clickButtonBuy() {
    alert("Compra efetuada com sucesso!");
    this.cartService.clearToCart();
    this.cartService.updateQuantityProductsBadgeCart();
    this.router.navigate(["produtos"]);
  }

}
