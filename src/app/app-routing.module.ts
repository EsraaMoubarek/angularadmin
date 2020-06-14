import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from '../app/home/home.component'
import{ScheduleComponent} from '../app/schedule/schedule.component'
import{HomeloginComponent} from '../app/homelogin/homelogin.component'
import{LoginComponent} from '../app/login/login.component'
//<<<<<<< HEAD
import { AdddriverComponent } from './adddriver/adddriver.component';
import { AddcolComponent } from './addcol/addcol.component';
//=======
import {WastepriceComponent} from '../app/wasteprice/wasteprice.component' 
import {EditWastePriceComponent} from '../app/edit-waste-price/edit-waste-price.component'
//<<<<<<< HEAD
//>>>>>>> 7d62aa389dd3a61456e18956bdb36c42877dbbd0
//=======
import {ManagerHomeComponent} from '../app/manager-home/manager-home.component'
import {AddSurveyComponent} from '../app/add-survey/add-survey.component'
import {QuestionComponent} from '../app/question/question.component'
//>>>>>>> 8356c9f3295a7ac1869c2b1f8e4f83810bca0ac6
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
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
},{
  path: 'Survey',
  component: AddSurveyComponent,
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
  path: "Ques",
  component: QuestionComponent,
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
