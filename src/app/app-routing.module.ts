import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllProductComponent } from './all-product/all-product.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfountComponent } from './pagenotfount/pagenotfount.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:'',component:AllProductComponent},
  {path:'user/login',component:LoginComponent},
  {path:'user/register',component:RegisterComponent},
  {path:'user/wishlist',component:WishlistComponent},
  {path:'user/cart',component:CartComponent},
  {path:'user/checkout',component:CheckoutComponent},
  {path:'user/viewProduct/:id',component:ViewProductComponent},
  {path:'**',component:PagenotfountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
