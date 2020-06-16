import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Schedule } from './schedule'; 
import { Region } from './region';
import { User } from './user';
import { SchCol } from './sch-col';
import { Port } from './port';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  port:Port=new Port()
  url ='http://localhost:'+this.port.port+'/home'
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
    return this.http.post<SchCol>('http://localhost:'+this.port.port+'/addschcol',  
    schcol, httpOptions);  
  }
  ///
  getallreg(): Observable<Region[]> { 
     
    return this.http.get<Region[]>('http://localhost:'+this.port.port+'/Region/Regionsch');  
  }  
  //
  getalldri(): Observable<User[]> { 
    
    return this.http.get<User[]>('http://localhost:'+this.port.port+'/driver');  
  } 
  //
  getallcol(): Observable<User[]> { 
    
    return this.http.get<User[]>('http://localhost:'+this.port.port+'/collector');  
  }
  ////
  delSchedule(id:string): Observable<Schedule> {  
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<Schedule>(this.url + '/'+id);  
  } 
  delScheduleCol(id:string): Observable<SchCol> {  
    //const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<SchCol>('http://localhost:'+this.port.port+'/'+id);  
  } 
  


}

