import { RestaurantsComponent } from './listing/restaurants/restaurants.component';
import { HomeComponent } from './listing/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './registration/login/login.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { MenuComponent } from './listing/menu/menu.component';
import { TrackingComponent } from './ordering/tracking/tracking.component';
import { SettingsComponent } from './registration/settings/settings.component';
import { CartComponent } from './ordering/cart/cart.component';
import { ProfileComponent } from './registration/profile/profile.component';
import { ForgotPasswordComponent } from './registration/forgot-password/forgot-password.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'reset', component: ForgotPasswordComponent},
 // { path: 'products/:id', component: ProductDetailsComponent },
 // { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
