import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { SurveyQuestions } from '../_models/survey-questions';
import { HttpClient } from '@angular/common/http';
import { SurveySurviceService } from '../_services/survey-survice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {
  public sss:string[]=[]
public ss = new Array<SurveyQuestions>(3);
//public survQues:SurveyQuestions[]=new SurveyQuestions() [3] //not good 
//survQues:Array<SurveyQuestions> = []
 survQues=new Array<string>(4);
 survQues1:SurveyQuestions=new SurveyQuestions()
 survQues2:SurveyQuestions=new SurveyQuestions()
 survQues3:SurveyQuestions=new SurveyQuestions()

add(){



}

  constructor(public survServ:SurveySurviceService) { 
  //  router.navigate([{outlets: {primary: '/Ques' ,moreQues: '/Ques'}}]);
  console.log(this.survQues)}
  fillSurveyArray(){
  //   this.survQues.push(this.survQues1)
  //   this.survQues.push(this.survQues2)
  //   this.survQues.push(this.survQues3)
  //  console.log(this.survQues)
  //  this.addSurv(this.survQues)
  }
addSurv(survy:SurveyQuestions[]){
  console.log(this.survQues)
this.ss[1].Question="hii"

   
  
this.survServ.addSurvey(survy).subscribe(a=>{console.log(a)})
}
  ngOnInit(): void {
    
  }

}
