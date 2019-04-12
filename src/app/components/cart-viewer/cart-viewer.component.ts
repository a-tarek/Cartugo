import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ImageService } from 'src/app/services/image/image.service';
import { CartProduct } from 'src/app/models/cart-product';
import { UrlService } from 'src/app/services/url/url.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-cart-viewer',
  templateUrl: './cart-viewer.component.html',
  styleUrls: ['./cart-viewer.component.scss']
})
export class CartViewerComponent implements OnInit {

  cart:CartProduct[];
  totalPrice:number;
  user:User;

  constructor(private cart$:CartService, private imageService:ImageService,private snackBar: MatSnackBar,
    private urlSerivce:UrlService,private router:Router,authService:AuthService) { 
    this.cart$.getCart().subscribe(data=> {
      this.cart = data;
      this.cart.forEach(p=>p.product.defimage = imageService.getFirstImage(p.product, 128));
    });
    this.cart$.getTotalPrice().subscribe(data=>this.totalPrice = data)

    authService.getLoggedIn().subscribe( u => this.user=u)
  }

  ngOnInit() {
  }

  removeProduct(product:CartProduct){
    console.log('product', product);
    this.cart$.remove(product);
  }
  checkout(){
    if(!this.user){
    this.urlSerivce.setRedirectUrl(this.router.url)
    this.router.navigate(['/login'])
  }
  else{
    this.cart$.empty()
    this.router.navigate(['/'])
    let counter
    this.openSnackBar(' Items purchased with ease <3','');
      }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    })
  }

}
