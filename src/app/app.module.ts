import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScheduleService } from './schedule.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule  
} from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
 import{MatTableModule,MatSortModule } from '@angular/material'
import {GoogleMapsModule} from '@angular/google-maps'
import {MatPaginatorModule} from '@angular/material/paginator';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { LoginComponent } from './login/login.component';

import { AdddriverComponent } from './adddriver/adddriver.component';
import { AddcolComponent } from './addcol/addcol.component';

import { WastepriceComponent } from './wasteprice/wasteprice.component';
import { EditWastePriceComponent } from './edit-waste-price/edit-waste-price.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';

import {MatTabsModule} from '@angular/material/tabs'

import {MatToolbarModule} from '@angular/material/toolbar';
import { BarTypClntRgnComponent } from './bar-typ-clnt-rgn/bar-typ-clnt-rgn.component';
import { CompanyComponent } from './company/company.component';
import { AddPromOnlyComponent } from './add-prom-only/add-prom-only.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ManagerNavbarComponent } from './manager-navbar/manager-navbar.component';
import { DiscollectorsComponent } from './discollectors/discollectors.component';
import { DisdriversComponent } from './disdrivers/disdrivers.component';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HomeComponent,
    HomeloginComponent,
    LoginComponent,

    AdddriverComponent,
    AddcolComponent,

    WastepriceComponent,
    EditWastePriceComponent,
    ManagerHomeComponent,


    BarTypClntRgnComponent,


    CompanyComponent,


    AddPromOnlyComponent,


    FeedbackComponent,


    AdminNavbarComponent,


    ManagerNavbarComponent,


    DiscollectorsComponent,


    DisdriversComponent,

   

  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    AppRoutingModule,
    //MatTabGroup,    
    GoogleMapsModule,
     //MatTab,
     MatTabsModule,
    GoogleChartsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  
   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  
  ],
  providers: [HttpClientModule,ScheduleService,MatDatepickerModule],
  bootstrap: [AppComponent]

})
export class AppModule { }
