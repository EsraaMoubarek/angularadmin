import { Component, OnInit } from '@angular/core';
import { WastepriceService } from '../_services/wasteprice.service';
import { Waste } from '../_models/waste';

@Component({
  selector: 'app-wasteprice',
  templateUrl: './wasteprice.component.html',
  styleUrls: ['./wasteprice.component.css']
})
export class WastepriceComponent implements OnInit {
 wastes:Waste[]=[]
 avgPrice:number
  constructor(private wasteServ:WastepriceService) { }
  getData(){
  this.wasteServ.getWasteData().subscribe(a=>{this.wastes=a})
  this.wasteServ.getAvgPrice().subscribe(a=>{this.avgPrice=a})
  }
  edit(r:string,i:number){
    // this.ee. edit=true
    console.log(this.wasteServ.waste)
  this.wasteServ.waste.Name=r
  this.wasteServ.waste.Id=i
  console.log(this.wasteServ.waste)
    }
  ngOnInit(): void {

    this.getData()
  }

}
