import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartProduct } from 'src/app/models/cart-product';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartProduct[] = [];
  itemsCount: number = 0;
  totalPrice: number = 0;

  private cart$: BehaviorSubject<Array<CartProduct>> = new BehaviorSubject([]);
  private itemsCount$: BehaviorSubject<number> = new BehaviorSubject(0);
  private totalPrice$: BehaviorSubject<number> = new BehaviorSubject(0);


  constructor() {
    let storedCart = JSON.parse(localStorage.getItem('cart'));
    this.cart = (storedCart) ? storedCart : [];
    this.updateSubsribers();
  }


  add(product: Product): void {
    let cpid = this.cart.findIndex(p => p.product.id === product.id)

    if (cpid > -1)
      Object.assign(this.cart[cpid], this.cart[cpid].count++);

    else
      this.cart.push({ product: product, count: 1 })

    this.updateAll();
  }


  empty(){
    this.cart =[];
    this.updateAll();
  }




  remove(cartProduct: CartProduct): void {
    let cpid = this.cart.findIndex(p => p.product.id === cartProduct.product.id);
    this.cart.splice(cpid, 1);

    this.updateAll()
  }

  getCart(): Observable<Array<CartProduct>> {
    return this.cart$.asObservable();
  }

  getTotalPrice(): Observable<number> {
    return this.totalPrice$.asObservable();
  }

  getItemsCount(): Observable<number> {
    return this.itemsCount$.asObservable();
  }


  private updateAll() {
    this.updateLocalStorage();
    this.updateSubsribers();

  }
  private updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private updateSubsribers() {
    this.cart$.next(this.cart);
    this.itemsCount$.next(this.countItems());
    this.totalPrice$.next(this.calculatePrice());
  }


  private countItems(): number {
    let count = 0;
    this.cart.forEach(el => count += el.count);
    return count;
  }

  private calculatePrice(): number {
    let price = 0;
    this.cart.forEach(el => price += el.product.price * el.count);
    return price;
  }
}

