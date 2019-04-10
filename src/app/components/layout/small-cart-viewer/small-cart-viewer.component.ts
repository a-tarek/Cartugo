import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartProduct } from 'src/app/models/cart-product';
import { EventManager } from '@angular/platform-browser';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-small-cart-viewer',
  templateUrl: './small-cart-viewer.component.html',
  styleUrls: ['./small-cart-viewer.component.scss']
})
export class SmallCartViewerComponent implements OnInit {

  cart:CartProduct[]
  itemsCount:number; 
  totalPrice:number;

  constructor(private cart$: CartService) {
    this.cart$.getCart().subscribe(data=> this.cart = data );
    this.cart$.getTotalPrice().subscribe(data=> this.totalPrice = data);
    this.cart$.getItemsCount().subscribe(data=> this.itemsCount = data);

  }
  ngOnInit() {
   
  }

  removeProduct(product:CartProduct){
    this.cart$.remove(product);
  }
}
