import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  
  constructor() { 
  }


  getFirstImage(product:Product, height:number):string{
    return this.getImage(product.images[0].id,product.images[0].fileName,height)
  }


  getImage(id, fileName, height):string{
    let base = "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US";
    return `${base}/${id}/zoom/${fileName}?sh=${height}`;
  }

}
