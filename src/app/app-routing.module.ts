import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './vms-components/booking/booking.component';
import { CommonFormComponent } from './reusable/common-form/common-form.component';
import { AuthorizedComponent } from './auth/authorized/authorized.component';
import { EntityComponent } from './vms-components/entity/entity.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './vms-components/home/home.component';
import { BookingFormComponent } from './vms-components/booking-form/booking-form.component';
import { VehicleFormComponent } from './vms-components/vehicle-form/vehicle-form.component';
import { VehicleTableComponent } from './vms-components/vehicle-table/vehicle-table.component';
import { DriverFormComponent } from './vms-components/driver-form/driver-form.component';
import { DriverTableComponent } from './vms-components/driver-table/driver-table.component';
import { EntityCardsComponent } from './vms-components/entity-cards/entity-cards.component';

const routes: Routes = [
  // {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  // {path:'home',component:HomeComponent},
  // {path:'vehicleDetails',component:CommonTableComponent},
  {path:'bookingForm',component:BookingFormComponent},
  {path:'bookingDetails',component:BookingComponent},
  {path:'entity',component:EntityComponent},
  { path: 'vehicleForm', component: VehicleFormComponent },
  { path: 'vehicleDetails', component: VehicleTableComponent },
  { path: 'driverForm', component: DriverFormComponent },
  { path: 'driverDetails', component: DriverTableComponent },
  { path: 'entityCards', component: EntityCardsComponent },

  { path: '', component: HomeComponent },
  { path: 'authorized', component: AuthorizedComponent },
  
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
