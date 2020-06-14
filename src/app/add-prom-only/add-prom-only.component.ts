import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../_services/company.service';
import { Comp } from '../_models/comp';
import { Promotion } from '../_models/promotion';
import { AddPromotionService } from '../_services/add-promotion.service';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { Promcode } from '../_models/promcode';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-add-prom-only',
  templateUrl: './add-prom-only.component.html',
  styleUrls: ['./add-prom-only.component.css']
})
export class AddPromOnlyComponent implements OnInit {
  newprom: Promotion = new Promotion();
  comps: Comp[] = [];
  ncode: number;
  npromcode: Promcode = new Promcode();


  public progress: number;
  public message: string;
  image: File;

  constructor(private formbulider: FormBuilder, private compService: CompanyService, public router: Router, 
    private promservice: AddPromotionService) { }

  ngOnInit(): void {
    this.compService.getallcomp().subscribe(a => {
      this.comps = a;
    })
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

  //makeRandom(lengthOfCode, possible);
  savecomp() {

    //this.compService.createCompany(this.newcomp).subscribe(a=>{
    //console.log(a);
    //this.newprom.CompanyId=a.id;
    //alert(a.name+" added sucessfully");
    this.promservice.createPromotion(this.newprom).subscribe(b => {
      
      this.uploadFile(b.id);
      alert(b.name + " added sucessfully");
      ///
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
      // return text;

      //})

    })
  }

  public uploadFile = (id) => {
  
    let fileToUpload = <File>this.image ;
    const formData = new FormData();
    
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.promservice.UploadPromotionsImage(formData,id).subscribe( (event)  => {
        console.log("event",event)
        event.type.valueOf
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
        }
      });
    }
    imageUpload(e) {
      this.progress =0;
      this.message = null;
      this.image = e.target.files[0];
    }
}
