import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Port} from '../port';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodayScheduleService {
  port:Port=new Port();
  getTodaySchedule(): Observable<object[]>{

   return this.http.get<object[]>("http://localhost:50856/api/admin/getadminschedule");
  }
  constructor(private http:HttpClient) { }
}
