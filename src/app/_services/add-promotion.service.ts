import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { Promotion } from '../_models/promotion';
import { Promcode } from '../_models/promcode';


@Injectable({
  providedIn: 'root'
})
export class AddPromotionService {

  constructor(private http: HttpClient) { }
  createPromotion(prom:Promotion): Observable<Promotion> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Promotion>('http://localhost:50856/addprom',  
    prom, httpOptions);  
  }
  createPromotionCode(promcode:Promcode): Observable<Promcode> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Promcode>('http://localhost:50856/addcode',  
    promcode, httpOptions);  
  }
  

}
