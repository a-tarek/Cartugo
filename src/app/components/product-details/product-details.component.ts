import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image/image.service';
import { Product } from '../../models/product';
import { ProductImage } from '../../models/product-image';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product$: Product;
  big_image: string;
  images: ProductImage[];

  constructor(private data: DataService, private route: ActivatedRoute, 
    private imageService: ImageService,
    private cartService: CartService) {
  }

  ngOnInit() {

    let i = this.route.params.subscribe(data => {
      this.product$ = data.id;
    });
    this.product$ = this.data.getShoe(this.product$);
    this.big_image = this.imageService.getImage(this.product$.images[0].id, this.product$.images[0].fileName, 612);
    this.images = [];
    this.product$.images.forEach(img => {

      this.images.push({
        id: img.id,
        fileName: img.fileName,
        url: this.imageService.getImage(img.id, img.fileName, 64),
      });
    })

  }
  changeTo(image) {
    this.big_image = this.imageService.getImage(image.id, image.fileName, 612);
  }
  addToCart():void{
    this.cartService.add(this.product$);
  }
}
