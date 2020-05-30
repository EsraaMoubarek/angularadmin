import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WastepriceService } from '../_services/wasteprice.service';

@Component({
  selector: 'app-edit-waste-price',
  templateUrl: './edit-waste-price.component.html',
  styleUrls: ['./edit-waste-price.component.css']
})
export class EditWastePriceComponent implements OnInit {
  editWastePrice(){
  //  console.log(this.test.waste)
  this.wasteServ.editWastePriceServ();
  this.router.navigateByUrl("/admin");}
  constructor(public http:HttpClient,public router:Router,public wasteServ:WastepriceService ) { }

  ngOnInit(): void {
  }

}
