import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from '../app/home/home.component'
import{ScheduleComponent} from '../app/schedule/schedule.component'
import{HomeloginComponent} from '../app/homelogin/homelogin.component'
import{LoginComponent} from '../app/login/login.component'
import {WastepriceComponent} from '../app/wasteprice/wasteprice.component' 
import {EditWastePriceComponent} from '../app/edit-waste-price/edit-waste-price.component'
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  
{
  path: 'Homelogin',
  component: HomeloginComponent,
},
  {
    path: 'Home',
    component: HomeComponent,
},
{
  path: 'Schedule',
  component: ScheduleComponent,
},
{
  path: 'Waste',
  component: WastepriceComponent,
  runGuardsAndResolvers: 'always'
},
{
  path: 'edit',
  component: EditWastePriceComponent,
},
{ 
  path: '',
  component: HomeComponent/*HomeloginComponent*/,
  //pathMatch:"full",
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
