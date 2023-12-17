import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CommonFormComponent } from './common-form/common-form.component';
import { CommonTableComponent } from './common/common-table/common-table.component';
import { EntityComponent } from './entity/entity.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'vehicleDetails',component:CommonTableComponent},
  {path:'bookingForm',component:CommonFormComponent},
  {path:'bookingDetails',component:BookingComponent},
  {path:'entity',component:EntityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
