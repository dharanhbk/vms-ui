import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CommonFormComponent } from './common-form/common-form.component';
import { CommonTableComponent } from './common/common-table/common-table.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserComponent } from './components/user/user.component';
import { EntityComponent } from './entity/entity.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  // {path:'home',component:HomeComponent},
  {path:'vehicleDetails',component:CommonTableComponent},
  {path:'bookingForm',component:CommonFormComponent},
  {path:'bookingDetails',component:BookingComponent},
  {path:'entity',component:EntityComponent},

  { path: '', component: HomeComponent },
  { path: 'authorized', component: AuthorizedComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:true
  })],
  exports: [RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
