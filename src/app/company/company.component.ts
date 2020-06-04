import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../_services/company.service';
import { Comp } from '../_models/comp';
import { Promotion } from '../_models/promotion';
import { AddPromotionService } from '../_services/add-promotion.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  newcomp: Comp=new Comp();
  newprom:Promotion=new Promotion();
  //comps:Comp[]=[];
  constructor(private formbulider: FormBuilder, private compService:CompanyService, public router: Router,private promservice:AddPromotionService) { }

  ngOnInit(): void {
    
  }
  savecomp() {

    this.compService.createCompany(this.newcomp).subscribe(a=>{
      console.log(a);
      this.newprom.CompanyId=a.id;
      alert(a.name+" added sucessfully");
     this.promservice.createPromotion(this.newprom).subscribe(b=>{
       console.log(b);
      alert(b.name+" added sucessfully");

     })

    })
  }

}
