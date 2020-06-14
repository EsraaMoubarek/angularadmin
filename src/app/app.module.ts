import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScheduleService } from './schedule.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule, MatProgressSpinnerModule, MatTabsModule, MatDividerModule,   
} from '@angular/material';  

import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import {GoogleMapsModule} from '@angular/google-maps'

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


import { BarTypClntRgnComponent } from './bar-typ-clnt-rgn/bar-typ-clnt-rgn.component';
import { CompanyComponent } from './company/company.component';
import { AddPromOnlyComponent } from './add-prom-only/add-prom-only.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ManagerNavbarComponent } from './manager-navbar/manager-navbar.component';
import { AddInstructionComponent } from './add-instruction/add-instruction.component';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { InstructionService } from './_services/instruction.service';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NotifyDialogBoxComponent } from './notify-dialog-box/notify-dialog-box.component';




@NgModule({
  entryComponents: [DialogComponent, InstructionListComponent,NotifyDialogBoxComponent],

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


    AddInstructionComponent,
    InstructionListComponent,
    DialogComponent,
    NotifyDialogBoxComponent,
    
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

    GoogleMapsModule,

    GoogleChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatTabsModule,
    MatSortModule,
    CdkTableModule,
    CdkTreeModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  
  ],
  providers: [HttpClientModule,ScheduleService,MatDatepickerModule,InstructionService],
  bootstrap: [AppComponent]

})
export class AppModule { }
