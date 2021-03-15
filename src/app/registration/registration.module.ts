
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FieldErrorDisplayComponent } from './../field-error-display/field-error-display.component';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    SettingsComponent,
    FieldErrorDisplayComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule  ]
})
export class RegistrationModule { }
