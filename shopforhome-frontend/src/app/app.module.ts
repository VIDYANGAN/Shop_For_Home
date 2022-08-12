import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { WishlistComponent } from './pages/user-dashboard/wishlist/wishlist.component';
import { CartComponent } from './pages/user-dashboard/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './pages/admin-dashboard/sidebar/sidebar.component';

import {MatInputModule} from '@angular/material/input';
import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatTabsModule} from '@angular/material/tabs';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductCRUDComponent } from './pages/admin-dashboard/product-crud/product-crud.component';
import { UserCRUDComponent } from './pages/admin-dashboard/user-crud/user-crud.component';
import { SalesComponent } from './pages/admin-dashboard/sales/sales.component';
import { CategoryCRUDComponent } from './pages/admin-dashboard/category-crud/category-crud.component';
import { WelcomeComponent } from './pages/admin-dashboard/welcome/welcome.component';
import { AddcategoryComponent } from './pages/admin-dashboard/category-crud/addcategory/addcategory.component';
import { AddproductComponent } from './pages/admin-dashboard/product-crud/addproduct/addproduct.component';
import { DeletecategoryComponent } from './pages/admin-dashboard/category-crud/deletecategory/deletecategory.component';
import { UpdatecategoryComponent } from './pages/admin-dashboard/category-crud/updatecategory/updatecategory.component';
import { UpdateproductComponent } from './pages/admin-dashboard/product-crud/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './pages/admin-dashboard/product-crud/deleteproduct/deleteproduct.component';
import { DeleteuserComponent } from './pages/admin-dashboard/user-crud/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './pages/admin-dashboard/user-crud/updateuser/updateuser.component';
import { AdduserComponent } from './pages/admin-dashboard/user-crud/adduser/adduser.component';
import { ProductSidebarComponent } from './pages/product/product-sidebar/product-sidebar.component';
import { LoadProductComponent } from './pages/product/load-product/load-product.component';
import {MatSelectModule} from '@angular/material/select';
import { UserSidebarComponent } from './pages/user-dashboard/user-sidebar/user-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    WishlistComponent,
    CartComponent,
    ProductComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    SidebarComponent,
    ProfileComponent,
    ProductCRUDComponent,
    UserCRUDComponent,
    SalesComponent,
    CategoryCRUDComponent,
    WelcomeComponent,
    AddcategoryComponent,
    AddproductComponent,
    DeletecategoryComponent,
    UpdatecategoryComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    AdduserComponent,
    ProductSidebarComponent,
    LoadProductComponent,
    UserSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTabsModule,
    // NgbModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatListModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
