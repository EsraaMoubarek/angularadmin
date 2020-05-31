import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from '../app/home/home.component'
import{ScheduleComponent} from '../app/schedule/schedule.component'
import{HomeloginComponent} from '../app/homelogin/homelogin.component'
import{LoginComponent} from '../app/login/login.component'
import { AdddriverComponent } from './adddriver/adddriver.component';
import { AddcolComponent } from './addcol/addcol.component';
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
},
{
  path: '',
  component: HomeloginComponent,
  pathMatch:"full",
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
