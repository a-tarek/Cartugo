import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-multiplier',
  templateUrl: './price-multiplier.component.html',
  styleUrls: ['./price-multiplier.component.scss']
})
export class PriceMultiplierComponent implements OnInit {

  constructor() { }
  @Input() multiple:string;
  ngOnInit() {
  }

}
