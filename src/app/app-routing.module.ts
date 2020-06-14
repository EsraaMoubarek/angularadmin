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
import { AddInstructionComponent } from './add-instruction/add-instruction.component';
import { InstructionListComponent } from './instruction-list/instruction-list.component';


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
    path: 'addcomp',
    component: CompanyComponent,
  },
  {
    path: 'AddInstructions',
    component: AddInstructionComponent,
  },
  {
    path: 'InstructionsList',
    component: InstructionListComponent,
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
