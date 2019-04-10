import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import{NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SmallCartViewerComponent } from './components/layout/small-cart-viewer/small-cart-viewer.component';

import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule, MatBadgeModule, MatTableModule} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmallProductViewerComponent } from './components/layout/small-product-viewer/small-product-viewer.component';
import { CartViewerComponent } from './components/cart-viewer/cart-viewer.component';
import { ProductTitleComponent } from './components/shared/product-title/product-title.component';
import { ProductSizeComponent } from './components/shared/product-size/product-size.component';
import { ProductPriceComponent } from './components/shared/product-price/product-price.component';
import { ProductDescriptionComponent } from './components/shared/product-description/product-description.component';
import { PriceMultiplierComponent } from './components/shared/price-multiplier/price-multiplier.component';
import { CartProductCardComponent } from './components/cart-product-card/cart-product-card.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    NotFoundComponent,
    FooterComponent,
    ProductListComponent,
    SmallCartViewerComponent,
    SmallProductViewerComponent,
    CartViewerComponent,
    ProductTitleComponent,
    ProductPriceComponent,
    ProductSizeComponent,
    ProductDescriptionComponent,
    PriceMultiplierComponent,
    CartProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgbModule.forRoot(),
    MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,MatIconModule,MatBadgeModule,MatTableModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
