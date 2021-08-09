import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ServicesComponent } from './pages/services/services.component';
import { DepartmentComponent } from './pages/department/department.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { McaComponent } from './pages/department/mca/mca.component';
import { BtechComponent } from './pages/department/btech/btech.component';
import { MtechComponent } from './pages/department/mtech/mtech.component';
import { MbaComponent } from './pages/department/mba/mba.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginComponent } from './profile/login/login.component';
import { LayoutComponent } from './profile/layout/layout.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './profile/signup/signup.component';
import { RegisterComponent } from './profile/register/register.component';
import { ConfirmPasswordDirective } from './utils/validators/confirm-password.directive';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { TempratureComponent } from './temprature/temprature.component';
import { RegistrationListComponent } from './profile/registration-list/registration-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FilterPipe,
    ServicesComponent,
    DepartmentComponent,
    AboutComponent,
    ContactComponent,
    McaComponent,
    BtechComponent,
    MtechComponent,
    MbaComponent,
   
    ProductsComponent,
    ProductListComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SignupComponent,
    RegisterComponent,
    ConfirmPasswordDirective,
    WeatherComponent,
    TempratureComponent,
    RegistrationListComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
