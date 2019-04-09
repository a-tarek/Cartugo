import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  constructor() { 
  }

  getImage(id, fileName, height){
    let base = "http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US";
    return `${base}/${id}/zoom/${fileName}?sh=${height}`;
  }

}
