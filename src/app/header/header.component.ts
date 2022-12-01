import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  quantityProductsBadgeCart = this.cartService.quantityProductsToCart;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  updateQuantityProductsToCart() {
    this.cartService.updateQuantityProductsBadgeCart();
  }

}
