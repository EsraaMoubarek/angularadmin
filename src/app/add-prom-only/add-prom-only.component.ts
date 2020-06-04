import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../_services/company.service';
import { Comp } from '../_models/comp';
import { Promotion } from '../_models/promotion';
import { AddPromotionService } from '../_services/add-promotion.service';


@Component({
  selector: 'app-add-prom-only',
  templateUrl: './add-prom-only.component.html',
  styleUrls: ['./add-prom-only.component.css']
})
export class AddPromOnlyComponent implements OnInit {
  newprom:Promotion=new Promotion();
  comps:Comp[]=[];

  constructor(private formbulider: FormBuilder, private compService:CompanyService, public router: Router,private promservice:AddPromotionService) { }

  ngOnInit(): void {
    this.compService.getallcomp().subscribe(a=>{
      this.comps=a;
    })
  }
  savecomp() {

    //this.compService.createCompany(this.newcomp).subscribe(a=>{
      //console.log(a);
      //this.newprom.CompanyId=a.id;
      //alert(a.name+" added sucessfully");
     this.promservice.createPromotion(this.newprom).subscribe(b=>{
       console.log(b);
      alert(b.name+" added sucessfully");

     })

    //})
  }

}
