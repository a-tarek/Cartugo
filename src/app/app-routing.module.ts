import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartViewerComponent } from './components/cart-viewer/cart-viewer.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'products',component:ProductListComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'cart', component:CartViewerComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
