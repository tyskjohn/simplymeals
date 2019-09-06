import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomecardsComponent } from './homecards/homecards.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { Mealoption1Component } from './mealoption1/mealoption1.component';
import { Mealoption2Component } from './mealoption2/mealoption2.component';
import { Mealoption3Component } from './mealoption3/mealoption3.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomecardsComponent,
    FooterComponent,
    AboutComponent,
    MealsComponent,
    Mealoption1Component,
    Mealoption2Component,
    Mealoption3Component,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
