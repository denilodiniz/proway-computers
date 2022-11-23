import { Injectable } from '@angular/core';
import { IProductCart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens: IProductCart[] = [];

  constructor() { }

  getCart() {
    return JSON.parse(localStorage.getItem("carrinho") || "");
  }

  addToCart(product: IProductCart) {
    this.itens.push(product);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  clearToCart() {
    this.itens = [];
    localStorage.clear();
  }
}
