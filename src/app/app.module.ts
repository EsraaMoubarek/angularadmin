import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScheduleService } from './schedule.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
<<<<<<< HEAD
  MatInputModule, MatTooltipModule, MatToolbarModule, MatProgressSpinnerModule, MatTabsModule, MatDividerModule,   
} from '@angular/material';  

=======
  MatInputModule, MatTooltipModule  
} from '@angular/material';  
import { MatDialogModule,MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog'
>>>>>>> fd55926d8bb533a00b4947b6d79c349cd3fc068d
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

<<<<<<< HEAD
=======
import {MatTabsModule} from '@angular/material/tabs'
//import { MatInputModule } from '@angular/material/input';  
//import { MatDialogModule} from '@angular/material/dialog'  
import { MatCheckboxModule } from '@angular/material/checkbox';  
import { MatSelectModule } from '@angular/material/select'; 
>>>>>>> fd55926d8bb533a00b4947b6d79c349cd3fc068d

import {MatToolbarModule} from '@angular/material/toolbar';
import { BarTypClntRgnComponent } from './bar-typ-clnt-rgn/bar-typ-clnt-rgn.component';
import { CompanyComponent } from './company/company.component';
import { AddPromOnlyComponent } from './add-prom-only/add-prom-only.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ManagerNavbarComponent } from './manager-navbar/manager-navbar.component';
<<<<<<< HEAD
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


=======
import { DiscollectorsComponent } from './discollectors/discollectors.component';
import { DisdriversComponent } from './disdrivers/disdrivers.component';
import { DisregionsComponent } from './disregions/disregions.component';
import { DismapComponent } from './dismap/dismap.component';
>>>>>>> fd55926d8bb533a00b4947b6d79c349cd3fc068d


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

<<<<<<< HEAD
=======

    DiscollectorsComponent,


    DisdriversComponent,


    DisregionsComponent,


    DismapComponent,

   
>>>>>>> fd55926d8bb533a00b4947b6d79c349cd3fc068d

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
    //MatTabGroup,    
    GoogleMapsModule,
<<<<<<< HEAD

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
=======
     //MatTab,
     MatTabsModule,
    GoogleChartsModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
     //MatDialogRef,
    // MAT_DIALOG_DATA
     
   
>>>>>>> fd55926d8bb533a00b4947b6d79c349cd3fc068d
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  
  ],
  providers: [HttpClientModule,ScheduleService,MatDatepickerModule,InstructionService],
  bootstrap: [AppComponent]

})
export class AppModule { }
