import { Component, OnInit } from '@angular/core';
import { WastepriceService } from '../_services/wasteprice.service';
import { Waste } from '../_models/waste';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-wasteprice',
  templateUrl: './wasteprice.component.html',
  styleUrls: ['./wasteprice.component.css']
})
export class WastepriceComponent implements OnInit {
  navigationSubscription; 
 //wastes:Waste[]=[]
 selectedWaste:Waste=new Waste()
 avgPrice:number
  constructor(public wasteServ:WastepriceService,public router:Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
    this.getData()
   }
   initialiseInvites(){
    this.wasteServ.getWasteData().subscribe(a=>{this.wasteServ.wastesShared=a
    })
   }
  getData(){
  this.wasteServ.getWasteData().subscribe(a=>{this.wasteServ.wastesShared=a
  console.log(a)})
  this.wasteServ.getAvgPrice().subscribe(a=>{this.avgPrice=a})
  }
  edit(r:string,i:number){
   console.log(i)
 //  console.log(this.wasteServ.wastesShared)
   this.selectedWaste=this.wasteServ.wastesShared.find(x => x.Id==i)
    localStorage.setItem("selectedWaste",JSON.stringify(this.selectedWaste));
 // console.log(this.selectedWaste)
    //console.log(this.wasteServ.waste)
 this.wasteServ.editWaste.Name=r
this.wasteServ.editWaste.Id=i
  //console.log(this.wasteServ.waste)
    }
  ngOnInit(): void {

    // this.getData()
  }

}
