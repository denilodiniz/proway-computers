import { Injectable } from '@angular/core';
import { IProductCart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens: IProductCart[] = [];
  quantityProductsToCart = this.getCart().length;

  constructor() { }

  getCart() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  addProductToCart(product: IProductCart) {
    this.itens.push(product);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removeProductToCart(productId: number) {
    this.itens  = this.itens.filter(item => item.id !== productId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  clearToCart() {
    this.itens = [];
    localStorage.clear();
  }

  updateQuantityProductsBadgeCart() {
    this.quantityProductsToCart = this.getCart().length;
  }

}
