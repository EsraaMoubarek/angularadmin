import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { Promotion } from '../_models/promotion';
import { Promcode } from '../_models/promcode';
import { Port } from '../port';


@Injectable({
  providedIn: 'root'
})
export class AddPromotionService {

  port : Port = new Port();
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
  UploadPromotionsImage(formData:FormData,id:number){
    return this.http.post('http://localhost:'+this.port.port+'/Api/admin/UploadPromotionsImage/'+id, 
    formData, {reportProgress: true, observe: 'events'})
  }


}
