import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './registration/login/login.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingModule } from './listing/listing.module';
import { OrderingModule } from './ordering/ordering.module';
import { RegistrationModule } from './registration/registration.module';
import { ServicesModule } from './services/services.module';
import { NavComponent } from './nav/nav.component';

const ROUTES: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
 // { path: 'products/:id', component: ProductDetailsComponent },
 // { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RegistrationModule,
    OrderingModule,
    ListingModule,
    ServicesModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
