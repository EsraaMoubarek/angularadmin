import { Component, OnInit } from '@angular/core';
import { TodayScheduleService } from '../_services/today-schedule.service';
import { TodaySchedule } from '../_models/today-schedule';
import { MatDialog } from '@angular/material';
import { AddSurveyComponent } from '../add-survey/add-survey.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {
  myDate=Date.now();

  todyScheds:TodaySchedule[]=[];
    
  title = 'googleMaps';
  position={
    lat:31.200092,
    lng:29.918739
  };

  label={
    color:'white',
    text:'alexandria'
  };
  constructor(private todaySchServ:TodayScheduleService,public dialog:MatDialog) {

  }
markr(i:number):void{
  this.position.lng=this.todyScheds[i].lng;
  this.position.lat=this.todyScheds[i].lat;
  this.label.color='red';
  this.label.text=this.todyScheds[i].region;
}
createSurvey(){
  let dialogRef = this.dialog.open(AddSurveyComponent
  , { position:{right:'0'}
  //   height: '400px',
  //   width: '600px',
   });
}
  ngOnInit(): void {
    this.todaySchServ.getTodaySchedule().subscribe(d=>{
      this.todyScheds=d;
      console.log(d);
      
    })
  }
}
