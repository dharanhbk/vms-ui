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

const routes: Routes = [
  // {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  // {path:'home',component:HomeComponent},
  // {path:'vehicleDetails',component:CommonTableComponent},
  {path:'bookingForm',component:CommonFormComponent},
  {path:'bookingDetails',component:BookingComponent},
  {path:'entity',component:EntityComponent},

  { path: '', component: HomeComponent },
  { path: 'authorized', component: AuthorizedComponent },
  // { path: 'user', component: UserComponent },
  // { path: 'admin', component: AdminComponent },
  // { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
