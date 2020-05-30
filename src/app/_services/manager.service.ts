import { Injectable } from '@angular/core';
import { Port } from '../port';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  port:Port=new Port()
  
  GetClientInRegion(){
  return  this.http.get<(string|number )[][]>("http://localhost:"+this.port.port+"/api/client/GetClientInRegion")
  }
  constructor(private http:HttpClient) { }
}
