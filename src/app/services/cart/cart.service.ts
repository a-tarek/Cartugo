import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart: Cart = { cartProducts: []}
  products: Observable<Product>;



  constructor() {  }


  add(product: Product): void {
    let cpid = this.cart.cartProducts.findIndex(p => p.product.id === product.id)

    if (cpid > -1)
      Object.assign(this.cart.cartProducts[cpid], this.cart.cartProducts[cpid].count++);

    else
      this.cart.cartProducts.push({ product: product, count: 1 })

    console.log('total', this.total());
  }


  remove(product: Product): void {
    let cpid = this.cart.cartProducts.findIndex(p => p.product.id === product.id)

    this.cart.cartProducts.splice(cpid, 1)
  }

  total(sum:number = 0):number{
     this.cart.cartProducts.forEach(el=>sum+= el.product.price * el.count)
    return sum;
  }
}

