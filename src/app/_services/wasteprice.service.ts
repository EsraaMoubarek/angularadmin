import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Port } from '../port';
import { Waste } from '../_models/waste';

@Injectable({
  providedIn: 'root'
})
export class WastepriceService {
  port:Port=new Port()
  public waste:Waste=new Waste();
getWasteData(){
return this.http.get<Waste[]>("http://localhost:"+this.port.port+"/api/waste/GetWasteData")
}
getAvgPrice(){
return this.http.get<number>("http://localhost:"+this.port.port+"/api/waste/GetSelectWasteToCalcAvgTotPrice")

}
editWastePriceServ(){
  this.http.post("http://localhost:"+this.port.port+"/api/waste/PostWaste" ,this.waste).subscribe(a=>{console.log(a)
  console.log("hi")
  })}
  constructor(private http:HttpClient) { 

  }
}
