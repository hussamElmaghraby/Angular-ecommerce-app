//modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
//firebase 
import {environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
//components 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components//home/home.component';
import { ProductsComponent } from './components//products/products.component';
import { ShoppingCartsComponent } from './components//shopping-carts/shopping-carts.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { LoginComponent } from './components/login/login.component';
import { AdminOrderComponent } from './components/admin/admin-order/admin-order.component';
//services
import { AuthService } from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { UserService } from './services/user.service';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    LoginComponent,
    AdminOrderComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [AuthService , AuthGuard , UserService , AdminAuthGuard ,CategoryService , ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
