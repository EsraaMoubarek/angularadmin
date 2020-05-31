import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScheduleService } from './schedule.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule  
} from '@angular/material';  
import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { GoogleChartsModule } from 'angular-google-charts';

//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { HomeloginComponent } from './homelogin/homelogin.component';
import { LoginComponent } from './login/login.component';
//<<<<<<< HEAD
import { AdddriverComponent } from './adddriver/adddriver.component';
import { AddcolComponent } from './addcol/addcol.component';
//=======
import { WastepriceComponent } from './wasteprice/wasteprice.component';
import { EditWastePriceComponent } from './edit-waste-price/edit-waste-price.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
//<<<<<<< HEAD
//>>>>>>> 7d62aa389dd3a61456e18956bdb36c42877dbbd0
//=======
import { BarTypClntRgnComponent } from './bar-typ-clnt-rgn/bar-typ-clnt-rgn.component';
//>>>>>>> 8356c9f3295a7ac1869c2b1f8e4f83810bca0ac6


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HomeComponent,
    HomeloginComponent,
    LoginComponent,
//<<<<<<< HEAD
    AdddriverComponent,
    AddcolComponent,
//=======
    WastepriceComponent,
    EditWastePriceComponent,
    ManagerHomeComponent,
//<<<<<<< HEAD
//>>>>>>> 7d62aa389dd3a61456e18956bdb36c42877dbbd0
//=======
    BarTypClntRgnComponent,
//>>>>>>> 8356c9f3295a7ac1869c2b1f8e4f83810bca0ac6
   
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
    GoogleChartsModule
    //
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  
  ],
  providers: [HttpClientModule,ScheduleService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
