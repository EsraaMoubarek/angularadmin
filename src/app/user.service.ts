import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  createDriver(driver:User): Observable<User> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<User>('http://localhost:50856/adddriver',  
    driver, httpOptions);  
  }
  createCollector(collector:User): Observable<User> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<User>('http://localhost:50856/addcol',  
    collector, httpOptions);  
  }

}
