import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../_services/company.service';
import { Comp } from '../_models/comp';
import { Promotion } from '../_models/promotion';
import { AddPromotionService } from '../_services/add-promotion.service';
import { Promcode } from '../_models/promcode';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  newcomp: Comp=new Comp();
  newprom:Promotion=new Promotion();
  ncode: number;
  npromcode: Promcode = new Promcode();

  //comps:Comp[]=[];
  constructor(private formbulider: FormBuilder, private compService:CompanyService, public router: Router,private promservice:AddPromotionService) { }

  ngOnInit(): void {
    
  }
  makeRandom() {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
    var lengthOfCode = 20;
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  savecomp() {

    this.compService.createCompany(this.newcomp).subscribe(a=>{
      console.log(a);
      this.newprom.CompanyId=a.id;
      alert(a.name+" added sucessfully");
     this.promservice.createPromotion(this.newprom).subscribe(b=>{
       console.log(b);
      alert(b.name+" added sucessfully");
      console.log(b.id);
      console.log(this.ncode);
      this.npromcode.PromtionId = b.id;
      for (let i = 0; i < this.ncode; i++) {
        this.npromcode.Code = this.makeRandom();
        console.log(this.npromcode.Code);
        console.log(this.npromcode);

        this.promservice.createPromotionCode(this.npromcode).subscribe(c => {
          console.log(c)
        })
      }
     })

    })
  }

}
