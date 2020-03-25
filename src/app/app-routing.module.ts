import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartsComponent } from './components/shopping-carts/shopping-carts.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminOrderComponent } from './components/admin/admin-order/admin-order.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'products' , component:ProductsComponent},
  {path: 'shopping-cart' , component:ShoppingCartsComponent},

  {path: 'check-out' , component:CheckOutComponent , canActivate: [AuthGuard]},
  {path: 'order-success' , component:OrderSuccessComponent , canActivate: [AuthGuard] },
  {path: 'my/orders' , component:MyOrdersComponent , canActivate: [AuthGuard]},
  
  // auth Guard to if the user is logged in it will check if it is admin or not 
  {path: 'admin/products' , component:AdminProductsComponent , canActivate: [AuthGuard , AdminAuthGuard] },
  {path: 'admin/products/:id' , component:ProductFormComponent , canActivate: [AuthGuard , AdminAuthGuard]},
  {path: 'admin/products/new' , component:ProductFormComponent , canActivate: [AuthGuard , AdminAuthGuard]},
  {path: 'admin/orders' , component:AdminOrderComponent , canActivate: [AuthGuard , AdminAuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
