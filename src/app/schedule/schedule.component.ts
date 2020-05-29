import { Component, OnInit } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Schedule } from '../schedule';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ScheduleService } from '../schedule.service';
import { Region } from '../region';
import { User } from '../user';
import { SchCol } from '../sch-col';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  //dataSaved = false;  
  scheduleForm: any;
  allSchedules: Schedule[] = [];
  newsch: Schedule = new Schedule();
  regions: Region[] = [];
  drivers: User[] = [];
  collectors: User[] = [];
  newcol1: SchCol = new SchCol();
  newcol2: SchCol = new SchCol();
  newcol3: SchCol = new SchCol();
  id: string;

  // employeeIdUpdate = null;  
  //massage = null; 
  constructor(private formbulider: FormBuilder, private scheduleService: ScheduleService, public router: Router) { }

  ngOnInit(): void {
    this.scheduleForm = this.formbulider.group({
      id: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      driverId: ['', [Validators.required]],
      RegionId: ['', [Validators.required]],

    });
    this.loadAllSchedules();
    this.scheduleService.getallreg().subscribe(a => {
      this.regions = a;
    })
    this.scheduleService.getalldri().subscribe(a => {
      this.drivers = a;
    })
    this.scheduleService.getallcol().subscribe(a => {
      this.collectors = a;
    })

  }
  loadAllSchedules() {
    //this.allSchedules = this.scheduleService.getall();
    this.scheduleService.getall().subscribe(a => {
      this.allSchedules = a;
      console.log(this.allSchedules);

    });

  }
  save() {
    this.scheduleService.createSchedule(this.newsch).subscribe(a => {
      console.log(a);
      this.newcol1.ScheduleId = a.id;
      this.newcol2.ScheduleId = a.id;
      this.newcol3.ScheduleId = a.id;
      if (this.newcol1.CollectorId != undefined) {
        this.scheduleService.createSchcol(this.newcol1).subscribe(b => {
          console.log(b)
          //console.log(this.newcol.ScheduleId);
          //console.log(this.newcol.CollectorId);
        }
        )
      }
      if (this.newcol2.CollectorId != undefined) {
        this.scheduleService.createSchcol(this.newcol2).subscribe(c => {
          console.log(c)
        }
        )
      }
      if (this.newcol3.CollectorId != undefined) {
        this.scheduleService.createSchcol(this.newcol3).subscribe(d => {
          console.log(d)
        }
        )
      }
      alert("Added Successfully");
      this.loadAllSchedules();


    }
    )
  }
  del(iid) {
    this.id = iid;
    const ans = confirm('Do you want to delete Schedule with id: ' + this.id);
    if (ans) {
      this.scheduleService.delScheduleCol(this.id).subscribe(a => {
        console.log(a);
        this.scheduleService.delSchedule(this.id).subscribe(a => console.log(a))


      })
      this.scheduleService.getall().subscribe(a=>console.log("this"+a));
      this.loadAllSchedules();

      //this.router.navigateByUrl("/Schedule");
      //window.location.reload();
    }
  }



  //this.newcol.ScheduleId=this.newsch.Id;
  //   this.newcol[1].ScheduleId=this.newsch.Id;
  //   this.newcol[2].ScheduleId=this.newsch.Id;

  // 

}
