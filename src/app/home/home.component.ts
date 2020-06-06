import { Component, OnInit } from '@angular/core';
import { TodayScheduleService } from '../_services/today-schedule.service';
import { TodaySchedule } from '../_models/today-schedule';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {
  myDate=Date.now();

  todyScheds:TodaySchedule[]=[];
  markers:any[]=[]; 
  
 
  position={
    lat:31.200092,
    lng: 29.918739
  };

  
  constructor(private todaySchServ:TodayScheduleService) {
     
  }

  ngOnInit(): void {
    this.todaySchServ.getTodaySchedule().subscribe(d=>{
      this.todyScheds=d;
      console.log(d);


      for(var val of this.todyScheds ){
        let mr={
          'title' : val.region,
          'position':{
               lat:val.lat,
               lng:val.lng
              },

          'label':{
           color:'white',
           text:val.region
          }
        }
         this.markers.push(mr);
         console.log(this.markers);
      }
    })
  }
}
