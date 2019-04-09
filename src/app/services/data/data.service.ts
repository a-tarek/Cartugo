import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Shoes } from '../../mocks/shoes';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  shoes: Product[];
  constructor() {
    this.shoes = Shoes;
   }

   getShoes():Product[]{
     return this.shoes;
   }

   getShoe(id:Object):Product{
     let shoe:Product;
      this.shoes.forEach(element=>{
          if (id === element.id){
            shoe=element;
          }
      })
      return shoe;
   }  

  
}
