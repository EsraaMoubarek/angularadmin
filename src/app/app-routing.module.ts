import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from '../app/home/home.component'
import{ScheduleComponent} from '../app/schedule/schedule.component'
import{HomeloginComponent} from '../app/homelogin/homelogin.component'
import{LoginComponent} from '../app/login/login.component'

import { AdddriverComponent } from './adddriver/adddriver.component';
import { AddcolComponent } from './addcol/addcol.component';

import {WastepriceComponent} from '../app/wasteprice/wasteprice.component' 
import {EditWastePriceComponent} from '../app/edit-waste-price/edit-waste-price.component'

import {ManagerHomeComponent} from '../app/manager-home/manager-home.component'
import { CompanyComponent } from './company/company.component';
import { AddPromOnlyComponent } from './add-prom-only/add-prom-only.component';

import { FeedbackComponent} from '../app/feedback/feedback.component';
import { DiscollectorsComponent } from './discollectors/discollectors.component';
import { DisdriversComponent } from './disdrivers/disdrivers.component';
import { DisregionsComponent } from './disregions/disregions.component';
import { DismapComponent } from './dismap/dismap.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'promonly',
    component: AddPromOnlyComponent,
  },
  {
    path: 'discol',
    component: DiscollectorsComponent,
  },
  {
    path: 'disdriv',
    component: DisdriversComponent,
  },
  
  {
    path: 'addcomp',
    component: CompanyComponent,
  },
  {
    path: 'adddriver',
    component: AdddriverComponent,
  },
  {
    path: 'addcol',
    component:AddcolComponent,
  },

{
  path: 'Homelogin',
  component: HomeloginComponent,
},
{
  path: 'disregs',
  component: DisregionsComponent,
},
{
  path: 'dismaps',
  component: DismapComponent,
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
  path: 'Manager',
  component: ManagerHomeComponent,
},
{
  path: 'feedback',
  component:  FeedbackComponent,
},
{ 
  path: '',
  component: HomeloginComponent,
  pathMatch:"full",
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
