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
//<<<<<<< HEAD
import {AddSurveyComponent} from '../app/add-survey/add-survey.component'
import {QuestionComponent} from '../app/question/question.component'
////>>>>>>> 8356c9f3295a7ac1869c2b1f8e4f83810bca0ac6
import { SurveyComponent } from './survey/survey.component';
import { SurveyQuestionsComponent } from './survey-questions/survey-questions.component';

import { CompanyComponent } from './company/company.component';
import { AddPromOnlyComponent } from './add-prom-only/add-prom-only.component';

import { FeedbackComponent} from '../app/feedback/feedback.component';
import { AddInstructionComponent } from './add-instruction/add-instruction.component';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import { DiscollectorsComponent } from './discollectors/discollectors.component';
import { DisdriversComponent } from './disdrivers/disdrivers.component';
import { DisregionsComponent } from './disregions/disregions.component';
import { DismapComponent } from './dismap/dismap.component';


//>>>>>>> 51889146068927b1a07687de8a9987239af324cf
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
//<<<<<<< HEAD
  path: "Ques",
  component: QuestionComponent,
},
{
  path: 'feedback',
  component:  FeedbackComponent,
//>>>>>>> 51889146068927b1a07687de8a9987239af324cf
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
