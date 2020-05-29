import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Schedule } from './schedule'; 
import { Region } from './region';
import { User } from './user';
import { SchCol } from './sch-col';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  url ='http://localhost:50856/home'
  constructor(private http: HttpClient) { }
  getall(): Observable<Schedule[]> { 
    
    return this.http.get<Schedule[]>(this.url);  
  } 
  /////
  createSchedule(schedule:Schedule): Observable<Schedule> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Schedule>(this.url + '/add',  
    schedule, httpOptions);  
  }
  ///
  createSchcol(schcol:SchCol): Observable<SchCol> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<SchCol>('http://localhost:50856/addschcol',  
    schcol, httpOptions);  
  }
  ///
  getallreg(): Observable<Region[]> { 
     
    return this.http.get<Region[]>('http://localhost:50856/region');  
  }  
  //
  getalldri(): Observable<User[]> { 
    
    return this.http.get<User[]>('http://localhost:50856/driver');  
  } 
  //
  getallcol(): Observable<User[]> { 
    
    return this.http.get<User[]>('http://localhost:50856/collector');  
  }
  ////
  delSchedule(id:string): Observable<Schedule> {  
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<Schedule>(this.url + '/'+id);  
  } 
  delScheduleCol(id:string): Observable<SchCol> {  
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<SchCol>('http://localhost:50856/'+id);  
  } 
  


}
