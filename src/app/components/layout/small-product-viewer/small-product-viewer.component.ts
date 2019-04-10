import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartProduct } from 'src/app/models/cart-product';
import { ProductImage } from 'src/app/models/product-image';
import { ImageService } from 'src/app/services/image/image.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-small-product-viewer',
  templateUrl: './small-product-viewer.component.html',
  styleUrls: ['./small-product-viewer.component.scss']
})
export class SmallProductViewerComponent implements OnInit {

  @Input() cartProduct: CartProduct;
  @Output()  removeProduct = new EventEmitter();

  imageUrl:string;
  itemsCount:number;
  constructor(private imageService: ImageService, private cart$:CartService) { }
  
  ngOnInit() {
    this.imageUrl = this.imageService.getImage(
      this.cartProduct.product.images[0].id,
      this.cartProduct.product.images[0].fileName,64);

    this.cart$.getItemsCount().subscribe(data=> this.itemsCount=data)

  }

  remove(event:Event){
    this.removeProduct.emit(this.cartProduct);
    
    if(this.itemsCount){
      event.stopPropagation()
      
    }
  }

}
