import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../models/product';
import { ImageService } from 'src/app/services/image/image.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  
  height :number;
  
  constructor( private imageService: ImageService, private cartService: CartService) { 
    this.height = 360;
  }

  ngOnInit() {
    this.product.images.forEach(i=>{
      i.url = this.imageService.getImage(i.id, i.fileName, this.height );
    })
  }

  addToCart():void{
    this.cartService.add(this.product);
  }
}
