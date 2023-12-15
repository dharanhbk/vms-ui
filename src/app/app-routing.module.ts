import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonFormComponent } from './common-form/common-form.component';
import { CommonTableComponent } from './common/common-table/common-table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'vehicleDetails',component:CommonTableComponent},
  {path:'booking',component:CommonFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
