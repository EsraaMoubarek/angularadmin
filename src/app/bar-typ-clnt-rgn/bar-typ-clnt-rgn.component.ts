import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Port } from '../port';

@Component({
  selector: 'app-bar-typ-clnt-rgn',
  templateUrl: './bar-typ-clnt-rgn.component.html',
  styleUrls: ['./bar-typ-clnt-rgn.component.css']
})
export class BarTypClntRgnComponent implements OnInit {

  public data:(string|number)[][]
port:Port=new Port() 

  title = 'Ratio of Restaurants to Apartments in certain region ';
  type = 'BarChart';
  hi = [
     ["2012", 900, 390],
     ["2013", 1000, 400],
     ["2014", 1170, 440],
     ["2015", 1250, 480],
     ["2016", 1530, 540]
  ];
  columnNames = ['number', 'apartment','restaurant'];
  options = {   
     hAxis: {
        title: 'number'
     },
     vAxis:{
        minValue:0
     }  
  };
  width = 550;
  height = 400;
  constructor(public http:HttpClient) { 
   this.http.get<(string|number)[][]>("http://localhost:"+this.port.port+"/api/manager/GetTypeOfClientsInRegion").subscribe(a=>{this.data=a;console.log(a)})
  }

  ngOnInit(): void {
  }

}
