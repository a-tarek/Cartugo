import { Component, OnInit } from '@angular/core';
import {Shoes} from '../../mocks/shoes';
import { DataService } from '../../services/data/data.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  total$:object;
  constructor(private data:DataService, private cart:CartService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.products = this.data.getShoes();
    console.log('this.route', this.route.snapshot.queryParams['returnUrl'] || '/');

    }

}