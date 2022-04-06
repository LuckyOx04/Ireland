import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register-component/register-component';
import { HomeComponent } from './components/home/home-component/home-component';
import { CookieModule } from 'ngx-cookie';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeGuard } from './guards/home-guard';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { AuthenticationManagerComponent } from './components/auth/authentication-manager/authentication-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Constants } from './Constants';
import { LogOutComponent } from './components/auth/log-out/log-out.component';
import { JwtInterceptor } from './services/JWTInterceptor';
import { ShopItemComponent } from './components/shop/shop-item/shop-item.component';
import { BasketComponent } from './components/basket/basket.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: HomeComponent,
  }
]

@NgModule({
  declarations: [

    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    AuthenticationManagerComponent,
    LogOutComponent,
    ShopItemComponent,
    BasketComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CookieModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    AppComponent,
    RouterModule
  ],
  providers: [
    Constants,
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
