import { Injectable } from '@angular/core';
import { Port } from '../port';
import { HttpClient } from '@angular/common/http';
import { Waste } from '../_models/waste';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  port:Port=new Port()
  public sharedWaste:Waste[]
  GetClientInRegion(){
  return  this.http.get<(string|number )[][]>("http://localhost:"+this.port.port+"/api/manager/GetClientInRegion")
  }
  constructor(private http:HttpClient) { }
}
