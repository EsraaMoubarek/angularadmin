import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Port } from '../port';

@Injectable({
  providedIn: 'root'
})
export class PromotionslistService {
  port: Port = new Port();

  constructor(private httpService:HttpClient) { }
  getPromotions(){
    return  this.httpService.get('http://localhost:'+this.port.port+'/Api/client/getPromotions/');
  }
  deletePromotion(id){
   return this.httpService.delete('http://localhost:'+this.port.port+'/api/admin/deletepromotion/'+id)

  }
}
