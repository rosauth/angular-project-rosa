import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { AgencyComponent } from '../pages/agency/agency.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { BusComponent } from '../pages/bus/bus.component';
import { TripComponent } from '../pages/trip/trip.component';
import { GridModule } from '@progress/kendo-angular-grid'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations:[
    LayoutComponent,
    AgencyComponent,
    ProfileComponent,
    BusComponent,
    TripComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    GridModule,
    FormsModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }