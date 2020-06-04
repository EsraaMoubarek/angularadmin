import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { Comp } from '../_models/comp';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }
  createCompany(comp:Comp): Observable<Comp> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Comp>('http://localhost:50856/addcomp',  
    comp, httpOptions);  
  }
  //
  getallcomp(): Observable<Comp[]> { 
     
    return this.http.get<Comp[]>('http://localhost:50856/getcomp');  
  }  
}
