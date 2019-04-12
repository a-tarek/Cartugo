import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartViewerComponent } from './components/cart-viewer/cart-viewer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'products',component:ProductListComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'login',component:LoginFormComponent},
  {path:'register',component:RegisterFormComponent},

  {path:'cart', component:CartViewerComponent},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
