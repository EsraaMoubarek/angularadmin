import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManagerService } from '../_services/manager.service';
import { WastepriceService } from '../_services/wasteprice.service';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  public data: (string|number )[][]

title = 'The most region with clients ';

   type = 'PieChart';
   hi = [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7] 
   ];
   columnNames = ['Region', 'Percentage'];
   options = {    
   };
   width = 550;
   height = 400;
  
  constructor(public http:HttpClient,public wasteServ:WastepriceService,public mngServ:ManagerService) {
   this.mngServ.GetClientInRegion().subscribe(a=>{console.log(a),  
      this.data=a})
      this.getData()
   }

   getData(){
    this.wasteServ.getWasteData().subscribe(a=>
      {this.wasteServ.wastesShared=a
       console.log(a)})
   // this.wasteServ.getAvgPrice().subscribe(a=>{this.avgPrice=a})
    }
  ngOnInit(): void {
    this.getData()
  }


}
