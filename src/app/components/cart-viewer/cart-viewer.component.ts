import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ImageService } from 'src/app/services/image/image.service';
import { CartProduct } from 'src/app/models/cart-product';

@Component({
  selector: 'app-cart-viewer',
  templateUrl: './cart-viewer.component.html',
  styleUrls: ['./cart-viewer.component.scss']
})
export class CartViewerComponent implements OnInit {

  cart:CartProduct[];
  totalPrice:number;
  displayedColumns: string[] = ['title', 'price', 'count'];
  dataSource = [];
  constructor(private cart$:CartService, private imageService:ImageService) { 
    this.cart$.getCart().subscribe(data=> {
      this.cart = data;
      this.dataSource = this.cart;
      this.cart.forEach(p=>p.product.defimage = imageService.getFirstImage(p.product, 128));
    });
    this.cart$.getTotalPrice().subscribe(data=>this.totalPrice = data)
  }

  ngOnInit() {
  }

  removeProduct(product:CartProduct){
    console.log('product', product);
    this.cart$.remove(product);
  }
}
