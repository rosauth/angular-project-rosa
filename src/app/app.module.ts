import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../app/layout/layout.module';
import { LoginModule } from '../app/auth/login/login.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropDownsModule,
    NgbModule
  ],
  providers: [ AuthGuard, AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
