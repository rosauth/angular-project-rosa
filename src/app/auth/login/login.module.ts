import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }