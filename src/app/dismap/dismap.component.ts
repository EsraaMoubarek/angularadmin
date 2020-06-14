import { Component, OnInit ,Inject} from '@angular/core';
import {  
  MatDialogRef,  
  MAT_DIALOG_DATA  
} from '@angular/material/dialog'; 
import { DisregionsComponent } from '../disregions/disregions.component';

@Component({
  selector: 'app-dismap',
  templateUrl: './dismap.component.html',
  styleUrls: ['./dismap.component.css']
})
export class DismapComponent implements OnInit {
 Idreg:number;
  mr1:any;
  mr2:any;
  position={
    lat:31.197,
    lng: 29.894
  };

  constructor() { 
    //this.Idreg = data.idtr 
  }

  ngOnInit(): void {
    this. mr1={
      'title' : "ElAtareen",
      'position':{
           lat:31.1971836,
           lng:29.8942182
          },

      'label':{
       color:'white',
       text:"ElAtareen"
      }
    }
    this. mr2={
      'title' : "Sidi Gaber",
      'position':{
           lat:31.2220433,
           lng:29.9280155
          },

      'label':{
       color:'white',
       text:"Sidi Gaber"
      }
    }
  }
//   close() {  
//     this.dialogRef.close();  
// } 
}
