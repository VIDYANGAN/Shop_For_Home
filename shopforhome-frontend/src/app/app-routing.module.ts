import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './pages/user-dashboard/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { WishlistComponent } from './pages/user-dashboard/wishlist/wishlist.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { SidebarComponent } from './pages/admin-dashboard/sidebar/sidebar.component';
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
import { DeleteproductComponent } from './pages/admin-dashboard/product-crud/deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './pages/admin-dashboard/product-crud/updateproduct/updateproduct.component';
import { DeleteuserComponent } from './pages/admin-dashboard/user-crud/deleteuser/deleteuser.component';
import { UpdateuserComponent } from './pages/admin-dashboard/user-crud/updateuser/updateuser.component';
import { AdduserComponent } from './pages/admin-dashboard/user-crud/adduser/adduser.component';
import { ProductSidebarComponent } from './pages/product/product-sidebar/product-sidebar.component';
import { LoadProductComponent } from './pages/product/load-product/load-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'product',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch:'full',
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: 'full'
  },
  // {
  //   path: "wishlist",
  //   component: WishlistComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: "cart",
  //   component: CartComponent,
  //   pathMatch: 'full'
  // },
  {
    path: "product",
    component : ProductComponent,
    children:[
      {
        path:"all",
        component:LoadProductComponent
      },
    ]
  },
  {
    path: "admin",
    component : AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      
      {
        path: "",
        component: WelcomeComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "productCRUD",
        component: ProductCRUDComponent,
      },
      {
        path: "userCRUD",
        component: UserCRUDComponent,
      },
      {
        path: "sales",
        component: SalesComponent,
      },
      {
        path: "categoryCRUD",
        component: CategoryCRUDComponent,
      },
      {
        path: "addCategory",
        component: AddcategoryComponent,
      },
      {
        path:"deleteCategory",
        component: DeletecategoryComponent,
      },
      {
        path:"updateCategory",
        component: UpdatecategoryComponent,
      },
      {
        path: "addProduct",
        component: AddproductComponent,
      },
      {
        path:"deleteProduct",
        component: DeleteproductComponent,
      },
      {
        path:"updateProduct",
        component: UpdateproductComponent,
      },
      {
        path: "addUser",
        component: AdduserComponent,
      },
      {
        path:"deleteUser",
        component: DeleteuserComponent,
      },
      {
        path:"updateUser",
        component: UpdateuserComponent,
      },
      
    ]
  },{
    path: "user",
    component : UserDashboardComponent,
    // pathMatch: 'full',
    canActivate:[UserGuard],
    children:[
      {
        path:"cart",
        component:CartComponent
      },
      {
        path:"wishlist",
        component:WishlistComponent
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "all",
        component : LoadProductComponent,
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
