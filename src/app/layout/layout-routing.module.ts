import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AgencyComponent } from '../pages/agency/agency.component';
import { BusComponent } from '../pages/bus/bus.component';
import { TripComponent } from '../pages/trip/trip.component';
import { ProfileComponent } from '../pages/profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'agency', component: AgencyComponent},
  { path: 'buses', component: BusComponent},
  { path: 'trip', component: TripComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}