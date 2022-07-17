import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';
import { HomeModule } from './component/home/home.module';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'products', loadChildren: ()=> import("./component/products/products.module").then(m=>m.ProductsModule)},
  { path:'data', loadChildren: ()=> import("./component/biding/biding.module").then(m=>m.BidingModule)},
  { path:'auth', loadChildren: ()=> import("./component/auth/auth.module").then(m=>m.AuthModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
