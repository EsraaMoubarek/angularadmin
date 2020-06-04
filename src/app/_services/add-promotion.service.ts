import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { Promotion } from '../_models/promotion';


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
}
