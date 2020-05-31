import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WastepriceService } from '../_services/wasteprice.service';
import { Waste } from '../_models/waste';
import { Port } from '../port';
@Component({
  selector: 'app-edit-waste-price',
  templateUrl: './edit-waste-price.component.html',
  styleUrls: ['./edit-waste-price.component.css']
})
export class EditWastePriceComponent implements OnInit {
  //waste:Waste
port:Port=new Port();
  editWastePrice(){
    //let selected = localStorage.getItem("selectedWaste");
 // this.waste=  JSON.parse(selected)
  this.wasteServ.editWastePriceServ();
  this.http.get<Waste[]>("http://localhost:"+this.port.port+"/api/waste/GetWasteData").subscribe(a=>{this.wasteServ.wastesShared=a
  })
  this.router.navigateByUrl("/Waste");
 

}

  constructor(public http:HttpClient,public router:Router,public wasteServ:WastepriceService ) { }

  ngOnInit(): void {
  }

}
