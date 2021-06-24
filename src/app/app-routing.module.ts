import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BtechComponent } from './pages/department/btech/btech.component';
import { DepartmentComponent } from './pages/department/department.component';
import { MbaComponent } from './pages/department/mba/mba.component';
import { McaComponent } from './pages/department/mca/mca.component';
import { MtechComponent } from './pages/department/mtech/mtech.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { LayoutComponent } from './profile/layout/layout.component';
import { LoginComponent } from './profile/login/login.component';
import { RegisterComponent } from './profile/register/register.component';
import { SignupComponent } from './profile/signup/signup.component';
import { TempratureComponent } from './temprature/temprature.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'temprature',component:TempratureComponent},

  {path:"home",component:HomeComponent},
  {path:"services",component:ServicesComponent},
  {path:"about",component:AboutComponent},
  {path:"weather",component:WeatherComponent},
  {path:"department",component:DepartmentComponent,

  children :[
    {path:"",component:McaComponent},
    {path:"mba",component:MbaComponent},
    {path:"btech",component:BtechComponent},
    {path:"mtech",component:MtechComponent},
     ]
  },
  
  
  {path:"contact",component:ContactComponent},
  {path:"products",component:ProductsComponent,
  children:[
    {path:"",component:ProductListComponent},
    {path:"productList/:Id",component:ProductListComponent},
    ]},
    {path:"**",component:PageNotFoundComponent}
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
